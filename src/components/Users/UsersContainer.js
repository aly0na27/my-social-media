import {connect} from "react-redux";
import {
    changeSelectedPage, toggleIsFollowingProgress, getUsers, setUnfollow, setFollow
} from "../../redux/users_reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Navigate} from "react-router-dom";
import {compose} from "redux";
import withIsFetching from "../../hoc/withIsFetching";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
        // if (!this.props.isAuth) {
        //     return <Navigate to={"/login"}/>
        // }
        return (<>
                {/*{this.props.isFetching ? <Preloader/> : null}*/}
                <Users {...this.props} onChangePageUsers={this.onChangePageUsers}/>
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
        // isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        // isAuth: state.auth.isAuth
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

// export default connect(mapStateToProps, {
//      changeSelectedPage, toggleIsFollowingProgress,
//     getUsers, setUnfollow, setFollow
// })(UsersContainer);

export default compose(
    connect(mapStateToProps, {
        changeSelectedPage, toggleIsFollowingProgress,
        getUsers, setUnfollow, setFollow}),
    withAuthRedirect
)(UsersContainer)