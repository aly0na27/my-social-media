import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser, getStatusUser, updatePhoto, updateProfile, updateUserStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

function ProfileContainer(props) {

    const refreshProfile = () => {
        let userId = props.router.params.userId
        if (!userId) {
            userId = props.userId;
        }
        props.getProfileUser(userId);
        props.getStatusUser(userId);
    }

    useEffect(() => {
        refreshProfile()
    }, []);

    useEffect(() => {
        refreshProfile()
    }, [props.router.params.userId])

    return (
        <Profile isOwner={!props.router.params.userId} {...props}
                 userId={props.router.params.userId}/>
    )

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
    connect(mapStateToProps, {
        getProfileUser,
        getStatusUser,
        updateUserStatus,
        updatePhoto,
        updateProfile
    }))(ProfileContainer)
