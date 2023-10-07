import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser} from "../../redux/profile-reducer";
import {Navigate, redirect, useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileUser(userId);
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={"/login"}/>
        }
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
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
export default connect(mapStateToProps, {getProfileUser})(withRouter(ProfileContainer));

