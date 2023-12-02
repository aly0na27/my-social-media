import {ResultCodeForCaptcha, ResultsCode} from "../api/api";
import avatarUser from "./../assets/images/avatar.svg";
import {BaseThunkType, InferActionsType} from "./redux-store";
import {authAPI} from "../api/authAPI";
import {securityApi} from "../api/securityAPI";
import {profileAPI} from "../api/profileAPI";

const initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    photos: null as null | string,
    isAuth: false,
    captcha: null as null | string
}

export type InitialStateType = typeof initialState

function authReducer(state = initialState, action: AuthActionsType): InitialStateType {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,

            }
        case "SET_CAPTCHA":
            return {
                ...state,
                captcha: action.captcha
            }
        case "UPDATE_PHOTO":
            return {
                ...state,
                photos: action.photo
            }
        default:
            return state;
    }
}

//Action

export type AuthActionsType = InferActionsType<typeof AuthActions>

export const AuthActions = {
    setAuthUserData: (userId: number, email: string, login: string, photos: string, isAuth) => {
        return {
            type: "SET_USER_DATA",
            data: {
                userId,
                email,
                login,
                photos,
                isAuth
            }
        } as const
    },
    setCaptcha: (captcha: string) => {
        return {
            type: "SET_CAPTCHA",
            captcha
        } as const
    },
    updateAuthPhoto: (photo: string) => {
        return {
            type: "UPDATE_PHOTO",
            photo: photo
        } as const
    },
}

// type PropertiesType<T> = T extends { [key: string]: infer U} ? U : never


//Thunk

export const authThunkCreate = (): BaseThunkType<AuthActionsType> => async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        await profileAPI.getProfileUser(id).then(response => {
            let photos = response.photos.small;
            if (!photos) {
                photos = avatarUser;
            }
            dispatch(AuthActions.setAuthUserData(id, email, login, photos, true));
        })
    }
}

export const loginThunkCreate = (email: string, password: string, rememberMe: boolean, captcha: string | null, setStatus: (status: any) => void): BaseThunkType<AuthActionsType> =>
    async (dispatch) => {
        let response = await authAPI.authLogin(email, password, rememberMe, captcha);

        if (response.resultCode === ResultCodeForCaptcha.Success) {
            await dispatch(authThunkCreate());
            dispatch(AuthActions.setCaptcha(null))
        } else {
            let message = (response.messages && response.messages.length > 0) ? response.messages[0] : '';
            if (response.resultCode === ResultCodeForCaptcha.isRequireCaptcha) {
                await dispatch(getCaptchaUrl());
            } else {
                setStatus(message)
            }
        }
    }

export const logoutThunkCreate = (): BaseThunkType<AuthActionsType> => async (dispatch: any) => {
    let response = await authAPI.authLogout();
    if (response.resultCode === ResultsCode.Success) {
        dispatch(AuthActions.setAuthUserData(null, null, null, null, false))
    }
}

export const getCaptchaUrl = (): BaseThunkType<AuthActionsType> => async (dispatch) => {
    let response = await securityApi.getCaptcha();
    dispatch(AuthActions.setCaptcha(response.url))
}
export default authReducer;

