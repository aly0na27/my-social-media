import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "39fdd632-c6e8-4999-9ca2-8763e39b5efa"
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
            return response
        })
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => {
            return response;
        })
    },
    updateProfilePhoto(newPhoto) {
        let formData = new FormData();
        formData.append("image", newPhoto)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(newData) {
        return instance.put('profile', newData)
    }
}
export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    authLogin: (email, password, rememberMe, captcha) => {
        return instance.post('auth/login', captcha ? {email, password, rememberMe, captcha} : {email, password, rememberMe}).then(response => {
            return response;
        })
    },
    authLogout: () => {
        return instance.delete('auth/login').then(response => {
            return response;
        })
    }
}

export const securityApi = {
    getCaptcha: () => {
        return instance.get("/security/get-captcha-url").then(response => {
                return response
            }
        )
    }

}