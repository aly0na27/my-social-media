import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {updateAuthPhoto} from "./auth-reducer";
import {PhotosType} from "../types/types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATE";
const UPDATE_PROFILE_PHOTO = "UPDATE_PROFILE_PHOTO";
const UPDATE_PROFILE_SUCCESSFUL = "UPDATE_PROFILE_SUCCESSFUL";

type PostType = {
    id: number,
    message: string,
    likesCount: number
}

type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}

type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType;
}

let initialState = {
    posts: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            likesCount: 23
        },
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            likesCount: 17
        },
        {
            id: "3",
            message: "вот тебе и мяу, вот тебе и реакт...",
            likesCount: ""
        }
    ] as Array<PostType>,
    myProfilePhoto: null as null | string,
    profile: null as ProfileType,
    status: "",
    isUpdateProfile: false
}

export type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.postText, likesCount: 8}],
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
                profile: {...state.profile, photos: {...action.photos}}
            }
        case UPDATE_PROFILE_SUCCESSFUL:
            return {
                ...state,
                isUpdateProfile: action.isUpdateProfile
            }
        default:
            return state;
    }
}

type AddPostActionType = {
    type: typeof ADD_POST,
    postText: string
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS,
    status: string
}

type UpdateProfilePhotoActionType = {
    type: typeof UPDATE_PROFILE_PHOTO,
    photos: PhotosType
}

type UpdateProfileSuccessActionType = {
    type: typeof UPDATE_PROFILE_SUCCESSFUL,
    isUpdateProfile: boolean
}
export const addPostCreateAction = (newPostText: string): AddPostActionType => ({type: ADD_POST, postText: newPostText})

const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

const setUserStatus = (status: string): SetUserStatusActionType => {
    return {
        type: SET_USER_STATUS,
        status
    }
}

const updateProfilePhoto = (newPhoto: PhotosType): UpdateProfilePhotoActionType => {
    return {
        type: UPDATE_PROFILE_PHOTO,
        photos: newPhoto
    }
}

const updateProfileSuccess = (isUpdateProfile: boolean): UpdateProfileSuccessActionType => {
    return {
        type: UPDATE_PROFILE_SUCCESSFUL,
        isUpdateProfile
    }
}


export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateProfileStatus(status);
    if (response && response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }


}

export const getStatusUser = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfileStatus(userId);
    dispatch(setUserStatus(response.data));
}

export const getProfileUser = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfileUser(userId);
    dispatch(setUserProfile(response))
}

export const updatePhoto = (file: string) => async (dispatch: any) => {
    let photo = await profileAPI.updateProfilePhoto(file);
    debugger
    if (photo.data.resultCode === 0) {
        dispatch(updateProfilePhoto(photo.data.data.photos))
        dispatch(updateAuthPhoto(photo.data.data.photos.small))
    }
}

export const updateProfile = (newData: ProfileType) => async (dispatch: any, getState) => {
    const response = await profileAPI.updateProfile(newData);
    if (response.data.resultCode === 0) {
        // dispatch(updateProfileInfo(response.data.data));
        dispatch(updateProfileSuccess(true))
        dispatch(getProfileUser(getState().auth.userId))
        // dispatch(setProfilePhoto(response.data))
    } else {
        if (response.data.messages) {
            let link = {}
            response.data.messages.forEach((el, i) => {
                const message = response.data.messages[i];
                if (message.includes("Contacts->")) {
                    const result = message.match(/->\w+/);
                    const linkItem = result[0].substring(2).toLowerCase()
                    link[linkItem] = response.data.messages[i]
                }
            })
            dispatch(stopSubmit("edit-profile", {"contacts": link}))
        }
        dispatch(updateProfileSuccess(false))
        // return Promise.reject(response.data.messages[0])
    }
}
export default profileReducer;