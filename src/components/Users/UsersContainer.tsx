import {connect} from "react-redux";
import {getUsers, setFollow, setUnfollow, UsersActions} from "../../redux/users_reducer";
import * as React from "react";
import {useEffect} from "react";
import Users from "./Users";
import {
    getFollowingInProgress,
    getIsFetching,
    getPageSelected,
    getPageSize,
    getTotalUserCount,
    getUsersSuperSelector
} from "../../redux/users-selectors";
import Preloader from "../common/Preloader/Preloader";
import {AppStateType} from "../../redux/redux-store";
import {UserType} from "../../types/types";


type MapStatePropsType = {
    pageSize: number,
    isFetching: boolean,
    pageSelected: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    totalUserCount: number
    category: boolean | null
    term: string
}

type MapDispatchPropsType = {
    getUsers: (pageSize: number, pageSelected: number, term?: string, friend?: boolean) => void,
    changeSelectedPage: (page: number) => void,
    setFollow: (pageNumber: number) => void,
    setUnfollow: (pageNumber: number) => void,
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

const UsersContainer: React.FC<PropsType> = ({getUsers, category, term, pageSelected, changeSelectedPage, pageSize,
                                                        isFetching, users, followingInProgress,
                                                    totalUserCount, setFollow, setUnfollow
                                                      }) => {

    useEffect(() => {
        getUsers(pageSize, pageSelected)
    }, [])

    const onChangePageUsers = (p) => {
        changeSelectedPage(p);
        getUsers(pageSize, p, term, category);
    }

    return (
        <>
            {isFetching ? <Preloader/> :
                <Users term={term} getUsers={getUsers} users={users} followingInProgress={followingInProgress} setFollow={setFollow} setUnfollow={setUnfollow}
                       onChangePageUsers={onChangePageUsers} pageSize={pageSize} pageSelected={pageSelected} totalUserCount={totalUserCount}
                changeSelectedPage={changeSelectedPage} category={category}/>
            }
        </>
    );
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        pageSelected: getPageSelected(state),
        followingInProgress: getFollowingInProgress(state),
        isFetching: getIsFetching(state),
        category: state.usersPage.category,
        term: state.usersPage.term
    }
}

const mapDispatchToProps = (dispatch): MapDispatchPropsType => {
    return {
        changeSelectedPage: (page: number) => {
            dispatch(UsersActions.changeSelectedPage(page))
        },
        getUsers: (pageSize: number, pageSelected: number, term?: string, friend?: boolean) => {
            return dispatch(getUsers(pageSize, pageSelected, term, friend))
        },
        setUnfollow: (userId: number) => {
            return dispatch(setUnfollow(userId))
        },
        setFollow: (userId: number) => {
            return dispatch(setFollow(userId))
        }
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType>(mapStateToProps, mapDispatchToProps)(UsersContainer);
