import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
// import News from "./components/News/News";
import {UsersPage} from "./components/Users/UsersContainer";
import MusicsContainer from "./components/Musics/MusicsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import React, {Suspense, useEffect, useState} from "react";
import {connect, ConnectedProps, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const NewsContainer = React.lazy(() => import("./components/News/NewsContainer"))
const App: React.FC<PropsFromRedux> = ({initialized, initializeApp}) => {
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        initializeApp();
    }, [])

    return (
        <>
            {initialized
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
                                    <Route path="/users" element={<UsersPage/>}/>
                                    <Route path="/music" element={<MusicsContainer/>}/>
                                    <Route path="/news" element={<NewsContainer/>}/>
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


const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initializeApp() {
            dispatch(initializeApp())
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>


const AppContainer: React.FC = connector(App)

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
