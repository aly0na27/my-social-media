import {connect} from "react-redux";
import {
    changeSelectedPage, follow, toggleIsFetching,
    setTotalUserCount, setUsers, unfollow, toggleIsFollowingProgress
} from "../../redux/users_reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.pageSize, this.props.pageSelected).then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
            this.props.setTotalUserCount(response.totalCount / 700)
        });
    }

    onChangePageUsers = (p) => {
        this.props.changeSelectedPage(p);
        this.props.toggleIsFetching(true);
        getUsers(this.props.pageSize, this.props.pageSelected).then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
        });
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       onChangePageUsers={this.onChangePageUsers}
                       pageSelected={this.props.pageSelected}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        pageSelected: state.usersPage.pageSelected,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followCreateAction(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowCreateAction(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersCreateAction(users));
//         },
//         changeSelectedPage: (page) => {
//             dispatch(changeSelectedPageCreateAction(page));
//         },
//         setTotalUserCount: (totalCount) => {
//             dispatch(setTotalUserCountCreateAction(totalCount))
//         },
//         toggleIsFetching: (toggle) => {
//             dispatch(setIsFetchingCreateAction(toggle))
//         }
//
//     }
// }

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, changeSelectedPage,
    setTotalUserCount, toggleIsFetching, toggleIsFollowingProgress
})(UsersContainer);

