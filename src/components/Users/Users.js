import styles from "./Users.module.css"
import React from "react";
import User from "./User/User";

function Users(props) {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let users = props.users.map((u) => {
        return (
            <User id={u.id} key={u.id} name={u.name} followed={u.followed} location={"u.location"}
                  follow={props.follow}
                  unfollow={props.unfollow} photos={u.photos.small}/>
        )
    })

    return (
        <div>
            <div className={styles.pages}>
                {
                    pages.map((el) => {
                        return <span onClick={() => props.onChangePageUsers(el)}
                                     className={props.pageSelected === el && styles.pageSelected}>{el}</span>
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