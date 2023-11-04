import {authAPI, profileAPI, ResultCodeForCaptcha, ResultsCode, securityApi} from "../api/api";
import avatarUser from "./../assets/images/avatar.svg";
import {FormAction} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

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

function authReducer(state = initialState, action: ActionsType): InitialStateType {
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

//Action

type ActionsType = SetUserDataActionType | SetCaptchaActionType | UpdateAuthPhotoActionType

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

export type UpdateAuthPhotoActionType = {
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
    return {
        type: UPDATE_PHOTO,
        photo: photo
    }
}

//Thunk

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const authThunkCreate = (): ThunkType => async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        profileAPI.getProfileUser(id).then(response => {
            let photos = response.photos.small;
            if (!photos) {
                photos = avatarUser;
            }
            dispatch(setAuthUserData(id, email, login, photos, true));
        })
    }
}

export const loginThunkCreate = (email: string, password: string, rememberMe: boolean, captcha: string | null, setStatus: (status: any) => void): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType | FormAction> =>
    async (dispatch) => {
        let response = await authAPI.authLogin(email, password, rememberMe, captcha);

        if (response.resultCode === ResultCodeForCaptcha.Success) {
            await dispatch(authThunkCreate());
            dispatch(setCaptcha(null))
        } else {
            let message = (response.messages && response.messages.length > 0) ? response.messages[0] : '';
            if (response.resultCode === ResultCodeForCaptcha.isRequireCaptcha) {
                await dispatch(getCaptchaUrl());
            } else {
                setStatus(message)
            }
        }
    }

export const logoutThunkCreate = (): ThunkType => async (dispatch: any) => {
    let response = await authAPI.authLogout();
    if (response.resultCode === ResultsCode.Success) {
        dispatch(setAuthUserData(null, null, null, null, false))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    let response = await securityApi.getCaptcha();
    dispatch(setCaptcha(response.url))
}
export default authReducer;

