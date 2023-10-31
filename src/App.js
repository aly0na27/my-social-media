import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import MusicsContainer from "./components/Musics/MusicsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import React, {lazy, Suspense, useEffect, useState} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux-store";

const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"))

const App = (props) => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        props.initializeApp();
    }, [])

    return (
        <>
            {props.initialized
                ? <main className={"App"} data-theme={isDark ? "dark" : "light"}>
                    <HeaderContainer isDark={isDark} setIsDark={setIsDark}/>
                    <div className="appWrapper">
                        <div className={"appWrapper__nav"}>
                            <Navbar/>
                        </div>
                        <div className="appWrapper__content">
                            <Suspense fallback={<Preloader/>}>
                                <Routes>
                                    <Route path={"/"} element={<Navigate to={"/profile"}/>}/>
                                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                                    <Route path="/profile/:userId?"
                                           element={<ProfileContainer/>}/>
                                    <Route path="/users" element={<UsersContainer/>}/>
                                    <Route path="/music" element={<MusicsContainer/>}/>
                                    <Route path="/news" element={<News/>}/>
                                    <Route path="/login" element={<LoginContainer/>}/>
                                </Routes>
                            </Suspense>
                        </div>
                    </div>
                </main>
                : <Preloader/>}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

const AppContainer = compose(
    connect(mapStateToProps, {
        initializeApp
    }),
)(App);

const SamuraiJsApp = function () {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default SamuraiJsApp
