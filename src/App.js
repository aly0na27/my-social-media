import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MusicsContainer from "./components/Musics/MusicsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import React, {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div>
                <HeaderContainer/>
                <div className="appWrapper">
                    <Navbar/>
                    <div className="appWrapper__content">
                        <Routes>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                            {/*<Route path="/myProfile" element={<MyProfile/>}/>*/}
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/music" element={<MusicsContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/login" element={<LoginContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
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

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);
