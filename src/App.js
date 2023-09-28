import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <div>
            <Header/>
            <div className="appWrapper">
                <Navbar/>
                <div className="appWrapper__content">
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
