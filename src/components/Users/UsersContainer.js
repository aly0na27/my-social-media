import {connect} from "react-redux";
import Users from "./Users";
import {followCreateAction, setUsersCreateAction, unfollowCreateAction} from "../../redux/users_reducer";

let mapStateToProps = (state) => {
    debugger;
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreateAction(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowCreateAction(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreateAction(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;