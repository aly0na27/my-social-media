import {instance, MyResponseType} from "./api";
import {PhotosType, ProfileType} from "../types/types";

type UpdateProfileResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfileUser(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(response => response.data)
    },
    getProfileStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(response => response.data)
    },
    updateProfileStatus(status: string) {
        return instance.put<MyResponseType>(`profile/status`, {status}).then(response => response.data)
    },
    updateProfilePhoto(newPhoto) {
        let formData = new FormData();
        formData.append("image", newPhoto)
        return instance.put<MyResponseType<UpdateProfileResponseDataType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    updateProfile(newData: ProfileType) {
        return instance.put<MyResponseType>('profile', newData)
    }
}
