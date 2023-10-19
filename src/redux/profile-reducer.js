import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATE";
const UPDATE_PROFILE_PHOTO = "UPDATE_PROFILE_PHOTO";

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
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.postText, likesCount: "8"}],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile

            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_PROFILE_PHOTO:
            debugger
            console.log(action.photos)
            return {
                ...state,
                profile: {...state.profile, photos: {...action.photos} }
            }
        default:
            return state;
    }
}

export const addPostCreateAction = (newPostText) => ({type: ADD_POST, postText: newPostText})

const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}

const updateProfilePhoto = (newPhoto) => {
    debugger
    return {
        type: UPDATE_PROFILE_PHOTO,
        photos: newPhoto
    }
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateProfileStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const getStatusUser = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileStatus(userId);
    dispatch(setUserStatus(response.data));
}

export const getProfileUser = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfileUser(userId);
    dispatch(setUserProfile(response))
}

export const updatePhoto = (file) => async (dispatch) => {
    let photo = await profileAPI.updateProfilePhoto(file);
    if (photo.data.resultCode === 0) {
        dispatch(updateProfilePhoto(photo.data.data.photos))
    }
}

export default profileReducer;