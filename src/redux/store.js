import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
    callSubscriber() {
        console.log("State changed!");
    },
    _state: {
        profilePage: {
            posts: [
                {
                    id: "1",
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    likesCount: "23"
                },
                {
                    id: "2",
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    likesCount: "47"
                },
                {id: "3", message: "вот тебе и мяу, вот тебе и реакт...", likesCount: "190"}
            ],
            newPostText: ""
        },
        messagePage: {
            messages: [
                {id: "1", message: "Hi"},
                {id: "2", message: "How are you?"},
                {id: "3", message: "Yo"},
                {id: "4", message: "Yo"},
                {id: "5", message: "Yo"}
            ],
            dialogs: [
                {id: "1", name: "Alyona", avatar: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-75.jpg"},
                {
                    id: "2",
                    name: "Sveta",
                    avatar: "https://sun1-23.userapi.com/impg/O01aLtVvSe1rGeO4Po5ycyiGwsLZq7hHWFSCyQ/HtOdMrMX72s.jpg?size=720x1056&quality=95&sign=02dc5110e9db1d0647250c14b378677a&type=album"
                },
                {
                    id: "3",
                    name: "Max",
                    avatar: "https://sun1-27.userapi.com/impg/IziGKBvq-qFC-PPY-gEc5DZPCNWA6vUjSm0x9A/Uca_lK2C4zU.jpg?size=2560x2560&quality=95&sign=430494fee4ebaea7e4c37efa11da78f6&type=album"
                },
                {
                    id: "4",
                    name: "Alex",
                    avatar: "https://i.pinimg.com/originals/59/f6/d1/59f6d192b9db45b87c09ebdfb184b44d.png"
                },
                {
                    id: "5",
                    name: "Nikita",
                    avatar: "https://android-obzor.com/wp-content/uploads/2022/03/img_2420-2048x2048.jpg"
                },
                {id: "6", name: "Laura", avatar: "https://4seller.ru/wp-content/uploads/2020/11/2484704267.jpg"}
            ],
            newMessageText: ""
        },
        sideBar: [
            {name: "Maxim", avatar: "https://i.pinimg.com/564x/e3/2b/82/e32b82b24bd8ef5ad7779206909f47dd.jpg"},
            {name: "Daria", avatar: "https://i.pinimg.com/564x/39/7f/0a/397f0af261f6ed134f1d27aa4a7571dc.jpg"},
            {name: "Alex", avatar: "https://i.pinimg.com/564x/85/64/a6/8564a60d18ec505477c1fb6e91e05251.jpg"}
        ]
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this.callSubscriber(this._state);
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    }
}

window.state = store._state;

export default store;