import styles from "./Users.module.css"
import * as React from "react";
import {useEffect} from "react";
import User from "./User/User"
import Paginator from "../common/Paginator/Paginator";
import {SearchContainer} from "./SearchContainer";
import {useSelector} from "react-redux";
import {
    getCategory,
    getFollowingInProgress,
    getIsFetching,
    getPageSelected,
    getPageSize,
    getTerm,
    getTotalUserCount,
    getUsersState
} from "../../redux/users-selectors";
import {getUsers, setFollow, setUnfollow, UsersActions} from "../../redux/users_reducer";
import {AppDispatch, useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {User as UserCascading} from "../CascadingScreens/User/User"

const Users: React.FC = () => {
    // const dispatch: ThunkDispatch<AppStateType, unknown, UsersActionsType> = useDispatch()

    const dispatch: AppDispatch = useAppDispatch()

    const users = useAppSelector(getUsersState)
    const pageSize = useSelector(getPageSize)
    const totalUserCount = useSelector(getTotalUserCount)
    const term = useSelector(getTerm)
    const category = useSelector(getCategory)
    const followingInProgress = useSelector(getFollowingInProgress)
    const pageSelected = useSelector(getPageSelected)
    const isFetching = useSelector(getIsFetching)

    useEffect(() => {
        dispatch(getUsers(pageSize, pageSelected))
    }, [])

    const onChangePageUsers = (p: number) => {
        dispatch(UsersActions.changeSelectedPage(p))
        dispatch(getUsers(pageSize, p, term, category))
    }

    const follow = (userId: number) => {
        return dispatch(setFollow(userId))
    }
    const unfollow = (userId: number) => {
        return dispatch(setUnfollow(userId))
    }

    return (
        <main className={styles.usersContainer}>
            <SearchContainer/>
            {isFetching ?
                <div className={styles.usersContainer__users}>
                    {
                        Array(pageSize).fill(<UserCascading/>)
                    }
                </div>

                : (totalUserCount ?
                        <>
                            <div className={styles.usersContainer__users}>
                                {
                                    users.map((u) => {
                                        return (
                                            <User key={u.id} id={u.id} name={u.name} followed={u.followed}
                                                  photos={u.photos.small}
                                                  follow={follow} unfollow={unfollow}
                                                  followingInProgress={followingInProgress}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <Paginator onChangePageUsers={onChangePageUsers}/>
                        </>
                        : <span>Nothing</span>
                )}
        </main>
    )
}

export default Users