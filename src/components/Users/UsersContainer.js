import {connect} from "react-redux";
import {
    changeSelectedPage,
    getUsers,
    setFollow,
    setUnfollow,
    toggleIsFollowingProgress
} from "../../redux/users_reducer";
import React, {useEffect} from "react";
import Users from "./Users";
import {
    getFollowingInProgress, getIsFetching,
    getPageSelected,
    getPageSize,
    getTotalUserCount,
    getUsersSuperSelector
} from "../../redux/users-selectors";
import Preloader from "../common/Preloader/Preloader";

function UsersContainer(props) {

    useEffect(() => {
        const {pageSize, pageSelected} = props;
        props.getUsers(pageSize, pageSelected)
    }, [])

    const onChangePageUsers = (p) => {
        props.changeSelectedPage(p);
        props.getUsers(props.pageSize, p);
    }

    return (
        <>
            {props.isFetching ? <Preloader/> :
                <Users {...props} onChangePageUsers={onChangePageUsers}/>
            }
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        pageSelected: getPageSelected(state),
        followingInProgress: getFollowingInProgress(state),
        isFetching: getIsFetching(state)
    }
}


export default connect(mapStateToProps, {
    changeSelectedPage, toggleIsFollowingProgress,
    getUsers, setUnfollow, setFollow
})(UsersContainer);
