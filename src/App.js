import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MusicsContainer from "./components/Musics/MusicsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MyProfile from "./components/Profile/MyProfile/MyProfile";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App(props) {

    return (
        <div>
            <HeaderContainer/>
            <div className="appWrapper">
                <Navbar/>
                <div className="appWrapper__content">
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/myProfile" element={<MyProfile/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/music" element={<MusicsContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
