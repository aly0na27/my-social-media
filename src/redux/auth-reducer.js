import {authAPI, usersAPI} from "../api/api";
import avatarUser from "../assets/images/1573589.png";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    photos: null,
    isAuth: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, photos) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            photos
        }
    }
}

export const authThunkCreate = () => (dispatch) => {

    authAPI.authMe().then(response => {
        if (response.resultCode === 0) {
            let {id, email, login} = response.data
            usersAPI.getProfileUser(id).then(response => {
                let photos = response.photos.small;
                if (!photos) {
                    photos = avatarUser;
                }
                dispatch(setAuthUserData(id, email, login, photos));
            })
        }
    })
}

export default authReducer;

