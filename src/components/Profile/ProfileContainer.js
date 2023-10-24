import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser, getStatusUser, updatePhoto, updateProfile, updateUserStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getProfileUser(userId);
        this.props.getStatusUser(userId);
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile  isOwner={!this.props.router.params.userId} {...this.props} userId={this.props.router.params.userId}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isUpdateProfile: state.profilePage.isUpdateProfile
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {getProfileUser, getStatusUser, updateUserStatus, updatePhoto, updateProfile}))(ProfileContainer)
