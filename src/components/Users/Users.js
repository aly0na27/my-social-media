import styles from "./Users.module.css"
import React from "react";
import User from "./User/User";
import {compose} from "redux";
import withIsFetching from "../../hoc/withIsFetching";
import Paginator from "../common/Paginator/Paginator";

function Users(props) {
    let users = props.users.map((u) => {
        return (
            <User key={u.id} id={u.id} name={u.name} followed={u.followed} location={"u.location"}
                  followingInProgress={props.followingInProgress} photos={u.photos.small}
                  toggleIsFollowingProgress={props.toggleIsFollowingProgress}
                  setUnfollow={props.setUnfollow} setFollow={props.setFollow}
            />
        )
    })

    return (
        <div>
            <Paginator onChangePageUsers={props.onChangePageUsers}
                       totalUserCount={props.totalUserCount}
                       pageSize={props.pageSize}
                       pageSelected={props.pageSelected}
            />
            <div className={styles.wrapperUsers}>
                { users }
            </div>
        </div>
    )
}

export default compose(withIsFetching)(Users)