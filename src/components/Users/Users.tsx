import styles from "./Users.module.css"
import * as React from "react";
import User from "./User/User"
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";
import {SearchContainer} from "./SearchContainer";

type UsersProps = {
    users: Array<UserType>,
    followingInProgress: Array<number>,
    setFollow: (userId: number) => void,
    setUnfollow: (userId: number) => void,
    totalUserCount: number,
    pageSize: number,
    pageSelected: number,
    onChangePageUsers: (pageNumber: number) => void
    getUsers: (pageSize: number, pageSelected: number, term?: string, friend?: boolean) => void,
    changeSelectedPage: (page: number) => void
    category: boolean | null
    term: string
}

const Users: React.FC<UsersProps> = ({
                                         users,
                                         term,
                                         category,
                                         changeSelectedPage,
                                         getUsers,
                                         followingInProgress,
                                         setFollow,
                                         setUnfollow,
                                         totalUserCount,
                                         pageSize,
                                         pageSelected,
                                         onChangePageUsers
                                     }) => {
    return (
        <main className={styles.usersContainer}>
            <header className={styles.header}>
                <h2>Users</h2>
            </header>
            <SearchContainer term={term} getUsers={getUsers} changeSelectedPage={changeSelectedPage}
                             onChangePageUsers={onChangePageUsers} pageSize={pageSize} pageSelected={pageSelected}
                             category={category}/>
            {totalUserCount ?
                <>
                    <div className={styles.usersContainer__users}>
                        {
                            users.map((u) => {
                                return (
                                    <User key={u.id} id={u.id} name={u.name} followed={u.followed}
                                          photos={u.photos.small}
                                          setFollow={setFollow} setUnfollow={setUnfollow}
                                          followingInProgress={followingInProgress}
                                    />
                                )
                            })
                        }
                    </div>
                    <Paginator totalUserCount={totalUserCount}
                               pageSize={pageSize}
                               pageSelected={pageSelected}
                               onChangePageUsers={onChangePageUsers}/>
                </>
                : <span>Nothing</span>
            }
        </main>
    )
}

export default Users