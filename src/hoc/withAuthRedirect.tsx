import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";
import {AppStateType} from "../redux/redux-store";


interface MapStateType{
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function withAuthRedirect<WCP>(AuthRedirectComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapStateType> = (props) => {
        let {isAuth, ...restProps} = props

        if (!props.isAuth) {
            return <Navigate to={"/login"}/>
        }
        return <AuthRedirectComponent {...restProps as unknown as WCP}/>
    }
    return connect<MapStateType>(mapStateToPropsForRedirect)(RedirectComponent);
}
