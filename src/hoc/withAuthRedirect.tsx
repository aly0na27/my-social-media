import {Navigate} from "react-router-dom";
import {connect, ConnectedComponent} from "react-redux";
import React, {FunctionComponent} from "react";
import {AppStateType} from "../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (AuthRedirectComponent: FunctionComponent): ConnectedComponent<any, any> | FunctionComponent => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to={"/login"}/>
        }
        return <AuthRedirectComponent {...props}/>
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
