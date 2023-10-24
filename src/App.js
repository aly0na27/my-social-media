import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import MusicsContainer from "./components/Musics/MusicsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import React, {Component, lazy, Suspense, useEffect, useState} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux-store";

const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"))

const App = (props) => {
    useEffect(() => {
        props.initializeApp();
    }, [])

    const [isDark, setIsDark] = useState(false)

    if (!props.initialized) {
        return <Preloader/>
    }
    return (
        <div className={"App"} data-theme={isDark ? "dark" : "light"}>
            {/*<div className={"appWrapper__header"}>*/}
                <HeaderContainer isDark={isDark} setIsDark={setIsDark}/>

            {/*</div>*/}
            <div className="appWrapper">
                {/*<div className={"appWrapper__header"}>*/}
                {/*    <HeaderContainer isDark={isDark} setIsDark={setIsDark}/>*/}

                {/*</div>*/}
                <div className={"appWrapper__nav"}>
                    <Navbar/>
                </div>
                <div className="appWrapper__content">
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/profile/:userId?"
                                   element={<ProfileContainer />}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/music" element={<MusicsContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/login" element={<LoginContainer/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    );
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

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp
    }),
)(App);

const SamuraiJsApp = function () {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJsApp
