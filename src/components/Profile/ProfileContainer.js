import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser, getStatusUser, updateUserStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.userId
        }

        this.props.getProfileUser(userId);

        this.props.getStatusUser(userId);
    }


    render() {
        return (
            <Profile {...this.props} userId={this.props.router.params.userId ? this.props.router.params.userId : 30096}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId
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

// const AuthRedirectComponent = (props) => {
//     if (!props.isAuth) {
//         return <Navigate to={"/login"}/>
//     }
//     return <ProfileContainer {...props}/>
// }

export default compose(
    connect(mapStateToProps, {getProfileUser, getStatusUser, updateUserStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer)
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
// // AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

// export default connect(mapStateToProps, {getProfileUser})(withRouter(AuthRedirectComponent));

