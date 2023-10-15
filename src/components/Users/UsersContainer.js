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
    getFollowingInProgress,
    getPageSelected,
    getPageSize,
    getTotalUserCount,
    getUsersSuperSelector
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.pageSelected)
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.pageSize, this.props.pageSelected).then((response) => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items);
        //     this.props.setTotalUserCount(response.totalCount / 700)
        // });
    }

    onChangePageUsers = (p) => {
        this.props.changeSelectedPage(p);
        this.props.getUsers(this.props.pageSize, p);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.pageSize, this.props.pageSelected).then((response) => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items);
        // });
    }

    render() {
        return (<>
                <Users {...this.props} onChangePageUsers={this.onChangePageUsers}/>
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
    }
}


export default connect(mapStateToProps, {
     changeSelectedPage, toggleIsFollowingProgress,
    getUsers, setUnfollow, setFollow
})(UsersContainer);
