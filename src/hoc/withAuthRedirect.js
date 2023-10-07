import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (AuthRedirectComponent) => {
    let RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to={"/login"}/>
        }
        return <AuthRedirectComponent {...props}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}
