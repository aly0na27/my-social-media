import {loginThunkCreate} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import React from 'react'
import LoginForm from "./LoginForm";
import styles from './Login.module.css'

type MapStateToPropsType = {
    isAuth: boolean,
    captcha: null | string
}

type MapDispatchToProps = {
    loginThunkCreate: (email: string, password: string, rememberMe: boolean, captcha: string | null, setStatus: (status: any) => void) => void
}

type PropsType = {
    isAuth: boolean
    captcha: null | string
    loginThunkCreate: () => void
}
const Login: React.FC<PropsType> = ({isAuth, captcha, loginThunkCreate}) => {
    if (isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <section className={styles.containerForm}>
            <header className={styles.title}>Login</header>
            <LoginForm captcha={captcha} loginThunkCreate={loginThunkCreate}/>
        </section>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}


const LoginContainer = connect<MapStateToPropsType, MapDispatchToProps>(mapStateToProps, {loginThunkCreate})(Login)

export default LoginContainer