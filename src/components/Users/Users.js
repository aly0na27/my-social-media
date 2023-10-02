import User from "./User/User";
import s from "./User/User.module.css";
import React from "react";
import axios from "axios";
function Users(props) {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
            debugger;
            props.setUsers(response.data.items);
            debugger;
        });
    }
    debugger;
    let users = props.users.map((u) => {
        return (
            <User id={u.id} key={u.id} name={u.name} followed={u.followed} location={"u.location"} follow={props.follow} unfollow={props.unfollow}/>
        )
    })
    debugger;
    return (
        <div>
            {users}
        </div>
    );
}

export default Users;