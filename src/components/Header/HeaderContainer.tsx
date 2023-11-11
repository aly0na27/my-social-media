import Header from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {logoutThunkCreate} from "../../redux/auth-reducer";
import * as React from "react";
import {AppStateType} from "../../redux/redux-store";
import {AuthActions} from "../../redux/auth-reducer";

const HeaderContainer = (props: HeaderProps) => {
    return (
        <Header {...props}/>
    )

}


const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile,
        photos: state.auth.photos,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutThunkCreate() {
            dispatch(logoutThunkCreate())
        },
        setAuthUserData(userId: number, email: string, login: string, photos: string, isAuth) {
            dispatch(AuthActions.setAuthUserData(userId, email, login, photos, isAuth))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export interface HeaderProps extends PropsFromRedux {
    isDark: boolean,
    setIsDark: (isDark: boolean) => void
}

export default connector(HeaderContainer)


