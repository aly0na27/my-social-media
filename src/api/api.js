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
        return instance.get(`profile/${userId}`).then(response => {
            return response.data;
        })
    }

}

export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    }
}

