import {authAPI, securityApi, usersAPI} from "../api/api";
import avatarUser from "../assets/images/1573589.png";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA = "SET_CAPTCHA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    photos: null,
    isAuth: false,
    captcha: null
}

function authReducer(state = initialState, action) {
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
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, photos, isAuth) => {
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

const setCaptcha = (captcha) => {
    return {
        type: SET_CAPTCHA,
        captcha
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

export const loginThunkCreate = (email, password, rememberMe, captcha) => async (dispatch) => {
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

export const logoutThunkCreate = () => async (dispatch) => {
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

