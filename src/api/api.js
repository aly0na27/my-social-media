import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "09353765-c548-4086-a6f6-a43a7968d508"
    }
})


export const usersAPI = {
    getUsers(pageSize, pageSelected) {
        return instance.get(`users?count=${pageSize}&page=${pageSelected}`).then(response => response.data)
    },
    setFollow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    setUnfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfileUser(userId) {
        console.warn("Warn, use new method")
        return profileAPI.getProfileUser(userId)
    }
}

export const profileAPI = {
    getProfileUser(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data;
        })
    },
    getProfileStatus(userId) {

        return instance.get(`profile/status/${userId}`).then(response => {
            // debugger
            return response
        })
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response =>{
            // debugger
            return response;
        })
    }
}
export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    authLogin: (email, password, rememberMe = false ) => {
        return instance.post('auth/login', {email, password, rememberMe}).then(response => {
            return response;
        })
    },
    authLogout: () => {
        return instance.delete('auth/login').then(response => {
            return response;
        })
    }
}

