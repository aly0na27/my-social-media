import {instance, MyResponseType, ResultCodeForCaptcha, ResultsCode} from "./api";


type MeResponseDataType = {
    id: number
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}


export const authAPI = {
    authMe: () => {
        return instance.get<MyResponseType<MeResponseDataType>>(`auth/me`).then(response => response.data)
    },
    authLogin: (email: string, password: string, rememberMe: boolean, captcha: string) => {
        return instance.post<MyResponseType<LoginResponseDataType, ResultsCode | ResultCodeForCaptcha>>('auth/login', captcha ? {email, password, rememberMe, captcha} : {
            email,
            password,
            rememberMe
        }).then(response => {
            return response.data;
        })
    },
    authLogout: () => {
        return instance.delete<MyResponseType>('auth/login').then(response => response.data)
    }
}