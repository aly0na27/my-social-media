import styles from "./Users.module.css"
import React from "react";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

function Users(props) {
    const users = props.users.map((u) => {
        return (
            <User key={u.id} id={u.id} name={u.name} followed={u.followed} photos={u.photos.small} {...props}/>
        )
    })

    return (
        <div className={styles.usersContainer}>
            <header className={styles.header}>
                <h2>Users</h2>
            </header>
            <div className={styles.usersContainer__users}>
                { users }
            </div>
            <Paginator {...props}/>

        </div>
    )
}

export default Users