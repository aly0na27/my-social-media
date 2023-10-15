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

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.pageSelected)
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.pageSize, this.props.pageSelected).then((response) => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items);
        //     this.props.setTotalUserCount(response.totalCount / 700)
        // });
        console.log(this.props)
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
    }
}


export default connect(mapStateToProps, {
     changeSelectedPage, toggleIsFollowingProgress,
    getUsers, setUnfollow, setFollow
})(UsersContainer);
