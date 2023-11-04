import {profileAPI, ResultsCode} from "../api/api";
// import {FormAction} from "redux-form";
import {updateAuthPhoto, UpdateAuthPhotoActionType} from "./auth-reducer";
import {PhotosType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

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
            likesCount: "",

        }
    ] as Array<PostType>,
    myProfilePhoto: null as null | string,
    profile: null as ProfileType,
    status: "",
    isUpdateProfile: false
}

export type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

// Action

type ActionsType = AddPostActionType | SetUserStatusActionType | SetUserProfileActionType | UpdateProfilePhotoActionType | UpdateProfileSuccessActionType

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

// Thunk

// type DispatchType = Dispatch<ActionsType>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateProfileStatus(status);
    if (data && data.resultCode === ResultsCode.Success) {
            dispatch(setUserStatus(status));
        }


}

export const getStatusUser = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfileStatus(userId);
    dispatch(setUserStatus(data));
}

export const getProfileUser = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getProfileUser(userId);
    dispatch(setUserProfile(response))
}

export const updatePhoto = (file: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType | UpdateAuthPhotoActionType> => async (dispatch) => {
    let data = await profileAPI.updateProfilePhoto(file);
    if (data.resultCode === ResultsCode.Success) {
        dispatch(updateProfilePhoto(data.data.photos))
        dispatch(updateAuthPhoto(data.data.photos.small))
    }
}

export const updateProfile = (newData: ProfileType, setStatus, setEditMode): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch, getState) => {
    const response = await profileAPI.updateProfile(newData);
    if (response.data.resultCode === ResultsCode.Success) {
        dispatch(updateProfileSuccess(true))
        setEditMode(false)
        await dispatch(getProfileUser(getState().auth.userId))
    } else {
        await dispatch(updateProfileSuccess(false))
        if (response.data.messages) {
            let link = {}
            response.data.messages.forEach((el, i) => {
                const message = response.data.messages[i];
                if (message.includes("Contacts->")) {
                    const result = message.match(/->\w+/);
                    const linkItem = result[0].substring(2).toLowerCase()
                    if (linkItem === "mainlink") {
                        link["mainLink"] = response.data.messages[i]
                    } else {
                        link[linkItem] = response.data.messages[i]
                    }
                }
            })
            setStatus({errors: link})
        }
    }
}
export default profileReducer;