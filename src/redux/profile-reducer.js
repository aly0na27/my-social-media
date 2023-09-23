const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    const addPost = function () {
        let newPost = {
            id: "5",
            message: state.newPostText,
            likesCount: "0"
        };
        state.posts.push(newPost);
        state.newPostText = '';

    }
    const updateNewPostText = function (newText) {
        state.newPostText = newText;
    }
    switch (action.type) {
        case ADD_POST:
            addPost();
            return state;
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(action.newPostText);
            return state;
        default:
            return state;
    }

}

export const addPostCreateAction = () => ({type: ADD_POST})

export const updatePostCreateAction = (newText) => ({type: UPDATE_NEW_POST_TEXT, newPostText: newText})

export default profileReducer;