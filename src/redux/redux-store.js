import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users_reducer";
import musicsReducer from "./musics-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    musicsPage: musicsReducer
})
let store = createStore(reducers);

window.store = store;

export default store;