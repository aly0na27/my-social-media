import User from "./User/User";
import s from "./User/User.module.css";
import React from "react";
function Users(props) {
    debugger;
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    followed: true,
                    fullName: "Dmitry",
                    status: "I'm a boss",
                    location: {city: "Ukraine", country: "Kiev"}
                },
                {
                    id: 2,
                    followed: false,
                    fullName: "Alex",
                    status: "I'm a boss too",
                    location: {city: "Russia", country: "Moscow"}
                },
                {
                    id: 3,
                    followed: true,
                    fullName: "John",
                    status: "I'm happy",
                    location: {city: "USA", country: "New-York"}
                },
                {
                    id: 4,
                    followed: true,
                    fullName: "Andrew",
                    status: "I'm so tired",
                    location: {city: "USa", country: "Boston"}
                }
            ]
        )
    }
    debugger;
    let users = props.users.map((u) => {
        return (
            <User id={u.id} key={u.id} fullName={u.fullName} followed={u.followed} location={u.location} follow={props.follow} unfollow={props.unfollow}/>
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