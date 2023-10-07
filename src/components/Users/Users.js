import styles from "./Users.module.css"
import React from "react";
import User from "./User/User";
import { v4 } from 'uuid'

function Users(props) {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let users = props.users.map((u) => {
        return (
            <User key={v4()} id={u.id} name={u.name} followed={u.followed} location={"u.location"}
                  follow={props.follow} followingInProgress={props.followingInProgress}
                  unfollow={props.unfollow} photos={u.photos.small}
                  toggleIsFollowingProgress={props.toggleIsFollowingProgress}
            />
        )
    })

    return (
        <div>
            <div className={styles.pages}>
                {
                    pages.map((el) => {
                        return <span key={el} onClick={() => props.onChangePageUsers(el)}
                                     className={props.pageSelected === el ? styles.pageSelected : undefined}>{el}</span>
                    })
                }
            </div>
            <div className={styles.wrapperUsers}>
                {users}
            </div>
        </div>
    )
}

export default Users