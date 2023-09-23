const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {
    debugger;
    const addMessage = function () {
        let newMessage = {
            id: "6",
            message: state.newMessageText
        }
        state.messages.push(newMessage);
        state.newMessageText = "";
    }
    const updateNewMessageText = function (newMessageText) {
        state.newMessageText = newMessageText;

    }
    switch (action.type) {
        case ADD_MESSAGE:
            addMessage();
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            updateNewMessageText(action.newMessageText);
            return state;
        default:
            return state;
    }
}

export const addMessageCreateAction = () => ({type: ADD_MESSAGE})

export const updateMessageCreateAction = (newText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newText})


export default dialogsReducer;