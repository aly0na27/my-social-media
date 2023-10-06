import {connect} from "react-redux";
import {
    changeSelectedPage, follow, toggleIsFetching,
    setTotalUserCount, setUsers, unfollow
} from "../../redux/users_reducer";
import axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.pageSelected}`, {
            withCredentials: true
        }).then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount / 700)
        });
    }

    onChangePageUsers = (p) => {
        this.props.changeSelectedPage(p);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`, {
            withCredentials: true
        }).then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
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
    setTotalUserCount, toggleIsFetching
})(UsersContainer);

