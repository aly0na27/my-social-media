import {ResultsCode} from "../api/api";
import {AuthActions, AuthActionsType} from "./auth-reducer";
import {PhotosType, ProfileType} from "../types/types";
import {BaseThunkType, InferActionsType} from "./redux-store";
import {profileAPI} from "../api/profileAPI";

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
    profile: null as ProfileType | null,
    status: "",
    isUpdateProfile: false
}

export type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.postText, likesCount: 8}],
            };
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile

            }
        case "SET_USER_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "UPDATE_PROFILE_PHOTO":
            return {
                ...state,
                profile: {...state.profile, photos: {...action.photos}}
            }
        case "UPDATE_PROFILE_SUCCESSFUL":
            return {
                ...state,
                isUpdateProfile: action.isUpdateProfile
            }
        default:
            return state;
    }
}

// Action

type ActionsType = InferActionsType<typeof ProfileActions>
export const ProfileActions = {
    addPostCreateAction: (newPostText: string) => {
        return {
            type: "ADD_POST",
            postText: newPostText
        } as const
    },
    setUserProfile: (profile: ProfileType) => {
        return {
            type: "SET_USER_PROFILE",
            profile
        } as const
    },
    setUserStatus: (status: string) => {
        return {
            type: "SET_USER_STATUS",
            status
        } as const
    },
    updateProfilePhoto: (newPhoto: PhotosType) => {
        return {
            type: "UPDATE_PROFILE_PHOTO",
            photos: newPhoto
        } as const
    },
    updateProfileSuccess: (isUpdateProfile: boolean) => {
        return {
            type: "UPDATE_PROFILE_SUCCESSFUL",
            isUpdateProfile
        } as const
    }
}

// Thunk

export const updateUserStatus = (status: string): BaseThunkType<ActionsType> => async (dispatch) => {
    let data = await profileAPI.updateProfileStatus(status);
    if (data && data.resultCode === ResultsCode.Success) {
        dispatch(ProfileActions.setUserStatus(status));
    }
}

export const getStatusUser = (userId: number): BaseThunkType<ActionsType> => async (dispatch) => {
    let data = await profileAPI.getProfileStatus(userId);
    dispatch(ProfileActions.setUserStatus(data));
}

export const getProfileUser = (userId: number): BaseThunkType<ActionsType> => async (dispatch) => {
    let response = await profileAPI.getProfileUser(userId);
    dispatch(ProfileActions.setUserProfile(response))
    // await Promise.reject("fvdvd")
}

export const updatePhoto = (file: string): BaseThunkType<ActionsType | AuthActionsType> => async (dispatch) => {
    let data = await profileAPI.updateProfilePhoto(file);
    if (data.resultCode === ResultsCode.Success) {
        dispatch(ProfileActions.updateProfilePhoto(data.data.photos))
        dispatch(AuthActions.updateAuthPhoto(data.data.photos.small))
    }
}

export const updateProfile = (newData: ProfileType, setStatus, setEditMode): BaseThunkType<ActionsType> => async (dispatch, getState) => {
    const response = await profileAPI.updateProfile(newData);
    if (response.data.resultCode === ResultsCode.Success) {
        dispatch(ProfileActions.updateProfileSuccess(true))
        setEditMode(false)
        await dispatch(getProfileUser(getState().auth.userId))
    } else {
        dispatch(ProfileActions.updateProfileSuccess(false))
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