import axios from "axios";
import {PhotosType, ProfileType, UserType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "63e36940-191e-4fff-a21f-799d278be419"
    }
})

export enum ResultsCode {
    Success = 0,
    Error = 1,
}

type GetUsers = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}

type FollowUser = {
    resultCode: ResultsCode
    messages: Array<string>
    data: {}
}

export const usersAPI = {
    getUsers(pageSize: number, pageSelected: number) {
        return instance.get<GetUsers>(`users?count=${pageSize}&page=${pageSelected}`).then(response => response.data)
    },
    setFollow(userId: number) {
        return instance.post<FollowUser>(`follow/${userId}`).then(response => response.data)
    },
    setUnfollow(userId: number) {
        return instance.delete<FollowUser>(`follow/${userId}`).then(response => response.data)
    }
}

type ProfileAPI = {
    resultCode: ResultsCode
    messages: Array<string>
    data: {}
}

type UpdateProfilePhotoType = {
    resultCode: ResultsCode,
    messages: Array<string>,
    data: {photos: PhotosType}
}

export const profileAPI = {
    getProfileUser(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(response => response.data)
    },
    getProfileStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(response => response.data)
    },
    updateProfileStatus(status: string) {
        return instance.put<ProfileAPI>(`profile/status`, {status}).then(response => response.data)
    },
    updateProfilePhoto(newPhoto) {
        let formData = new FormData();
        formData.append("image", newPhoto)
        return instance.put<UpdateProfilePhotoType>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    updateProfile(newData: ProfileType) {
        return instance.put<ProfileAPI>('profile', newData)
    }
}



export enum ResultCodeForCaptcha {
    Success = 0,
    Error = 1,
    isRequireCaptcha = 10

}
type AuthMe = {
    data: {id: number, email: string, login: string}
    resultCode: number
    messages: Array<string>
}

type AuthLogin = {
    resultCode: number
    messages: Array<string>
    data: {userId: number}
}

type AuthLogout = {
    resultCode: number
    messages: Array<string>
    data: {}
}

export const authAPI = {
    authMe: () => {
        return instance.get<AuthMe>(`auth/me`).then(response => response.data)
    },
    authLogin: (email: string, password: string, rememberMe: boolean, captcha: string) => {
        return instance.post<AuthLogin>('auth/login', captcha ? {email, password, rememberMe, captcha} : {email, password, rememberMe}).then(response => {
            return response.data;
        })
    },
    authLogout: () => {
        return instance.delete<AuthLogout>('auth/login').then(response => response.data)
    }
}

export const securityApi = {
    getCaptcha: () => {
        return instance.get<{url: string}>("/security/get-captcha-url").then(response => {
                return response.data
            }
        )
    }

}