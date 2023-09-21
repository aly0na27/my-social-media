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
            newPostText: "it-kamasutra"
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
            newMessageText: "blabla"
        },
        siteBar: [
            {name: "Maxim", avatar: "https://i.pinimg.com/564x/e3/2b/82/e32b82b24bd8ef5ad7779206909f47dd.jpg"},
            {name: "Daria", avatar: "https://i.pinimg.com/564x/39/7f/0a/397f0af261f6ed134f1d27aa4a7571dc.jpg"},
            {name: "Alex", avatar: "https://i.pinimg.com/564x/85/64/a6/8564a60d18ec505477c1fb6e91e05251.jpg"}
        ]
    },
    getState() {
        return this._state;
    },
    addPost() {
        let newPost = {
            id: "5",
            message: this._state.profilePage.newPostText,
            likesCount: "0"
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: "6",
            message: this._state.messagePage.newMessageText
        }
        this._state.messagePage.messages.push(newMessage);
        this._state.messagePage.newMessageText = "";
        this.callSubscriber(this._state);
    },
    updateNewMessageText(newMessageText) {
        this._state.messagePage.newMessageText = newMessageText;
        this.callSubscriber(this._state);
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    }
}

window.state = store._state;

export default store;