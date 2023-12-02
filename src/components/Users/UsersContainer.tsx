import * as React from "react";
import Users from "./Users";
import styles from "./Users.module.css";


export const UsersPage: React.FC = () => {
    return (
        <div>
            <header className={styles.header}>
                <h2>Users</h2>
            </header>
            <Users/>
        </div>
    );
}

