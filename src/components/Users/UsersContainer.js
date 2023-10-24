import {connect} from "react-redux";
import {
    changeSelectedPage,
    getUsers,
    setFollow,
    setUnfollow,
    toggleIsFollowingProgress
} from "../../redux/users_reducer";
import React from "react";
import Users from "./Users";
import {
    getFollowingInProgress, getIsFetching,
    getPageSelected,
    getPageSize,
    getTotalUserCount,
    getUsersSuperSelector
} from "../../redux/users-selectors";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        // console.log("rerender")
        const {pageSize, pageSelected} = this.props
        this.props.getUsers(pageSize, pageSelected)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("rerender")
    }

    onChangePageUsers = (p) => {
        this.props.changeSelectedPage(p);
        this.props.getUsers(this.props.pageSize, p);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                <Users {...this.props} onChangePageUsers={this.onChangePageUsers}/>
                }
                    </>
        );
    }
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
