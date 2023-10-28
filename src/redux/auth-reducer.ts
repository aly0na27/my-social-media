import {authAPI, securityApi, usersAPI} from "../api/api";
// import {stopSubmit} from "redux-form";
import avatarUser from "./../assets/images/avatar.svg";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA = "SET_CAPTCHA";
const UPDATE_PHOTO = "UPDATE_PHOTO";


const initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    photos: null as null | string,
    isAuth: false,
    captcha: null as null | string
}

export type InitialStateType = typeof initialState



function authReducer(state: InitialStateType = initialState, action: any): InitialStateType {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,

            }
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }
        case UPDATE_PHOTO:
            return {
                ...state,
                photos: action.photo
            }
        default:
            return state;
    }
}

type UserType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    photos: string | null,
    isAuth: boolean
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: UserType
}

type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA,
    captcha: string
}

type UpdateAuthPhotoActionType = {
    type: typeof UPDATE_PHOTO,
    photo: string
}

export const setAuthUserData = (userId: number, email: string, login: string, photos: string, isAuth): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            photos,
            isAuth
        }
    }
}

const setCaptcha = (captcha: string): SetCaptchaActionType => {
    return {
        type: SET_CAPTCHA,
        captcha
    }
}

export const updateAuthPhoto = (photo: string): UpdateAuthPhotoActionType => {
    debugger
    return {
        type: UPDATE_PHOTO,
        photo: photo
    }
}

export const authThunkCreate = () => async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        usersAPI.getProfileUser(id).then(response => {
            let photos = response.photos.small;
            if (!photos) {
                photos = avatarUser;
            }
            dispatch(setAuthUserData(id, email, login, photos, true));
        })
    }
}

export const loginThunkCreate = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch) => {
    let response = await authAPI.authLogin(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(authThunkCreate());
        dispatch(setCaptcha(null))
    } else {
        let message = (response.data.messages && response.data.messages.length > 0) ? response.data.messages[0] : '';
        dispatch(stopSubmit("login", {_error: message}));
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
    }
}

export const logoutThunkCreate = () => async (dispatch: any) => {
    let response = await authAPI.authLogout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityApi.getCaptcha();
    dispatch(setCaptcha(response.data.url))
}
export default authReducer;

