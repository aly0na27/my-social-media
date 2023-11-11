import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "63e36940-191e-4fff-a21f-799d278be419"
    }
})

export type MyResponseType<D = {}, RC = ResultsCode> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export enum ResultsCode {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    Success = 0,
    Error = 1,
    isRequireCaptcha = 10

}


