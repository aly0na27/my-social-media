import Header from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {logoutThunkCreate, setAuthUserData} from "../../redux/auth-reducer";
import * as React from "react";
import {AppStateType} from "../../redux/redux-store";

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
        }
    }

}


const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export interface HeaderProps extends PropsFromRedux {
    isDark: boolean,
    setIsDark: (isDark: boolean) => void
}
export default connect(mapStateToProps, {setAuthUserData, logoutThunkCreate})(HeaderContainer)


