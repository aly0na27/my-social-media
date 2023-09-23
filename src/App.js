import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

function App(props) {
    return (
        <div>
            <Header/>
            <div className="appWrapper">
                <Navbar state={props.state}/>
                <div className="appWrapper__content">
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs state={props.state} dispatch={props.dispatch}/>}/>
                        <Route path="/profile" element={<Profile state={props.state} dispatch={props.dispatch}/>}/>
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
