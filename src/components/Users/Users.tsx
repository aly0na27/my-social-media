import styles from "./Users.module.css"
import * as React from "react";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../redux/users_reducer";

type UsersProps = {
    users: Array<UserType>,
    followingInProgress: Array<number>,
    setFollow: (userId: number) => void,
    setUnfollow: (userId: number) => void,
    totalUserCount: number,
    pageSize: number,
    pageSelected: number,
    onChangePageUsers: (pageNumber: number) => void
}

const Users: React.FC<UsersProps> = ({users, followingInProgress, setFollow, setUnfollow, totalUserCount, pageSize, pageSelected, onChangePageUsers}) => {
    return (
        <div className={styles.usersContainer}>
            <header className={styles.header}>
                <h2>Users</h2>
            </header>
            <div className={styles.usersContainer__users}>
                {
                    users.map((u) => {
                        return (
                            <User key={u.id} id={u.id} name={u.name} followed={u.followed} photos={u.photos.small}
                                    setFollow={setFollow} setUnfollow={setUnfollow} followingInProgress={followingInProgress}
                            />
                        )
                    })
                }
            </div>
            <Paginator  totalUserCount={totalUserCount}
                        pageSize={pageSize}
                        pageSelected={pageSelected}
                        onChangePageUsers={onChangePageUsers}/>

        </div>
    )
}

export default Users