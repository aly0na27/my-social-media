import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "09353765-c548-4086-a6f6-a43a7968d508"
    }
})

export const getUsers = (pageSize, pageSelected) => {
    return instance.get(`users?count=${pageSize}&page=${pageSelected}`).then(response => response.data)
}

export const setFollow = (userId) => {
    return instance.post(`follow/${userId}`).then(response => response.data)
}

export const setUnfollow = (userId) => {
    return instance.delete(`follow/${userId}`).then(response => response.data)
}
