import {instance, MyResponseType} from "./api";
import {UserType} from "../types/types";

type GetUsers = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}

export const usersAPI = {
    getUsers(pageSize: number, pageSelected: number) {
        return instance.get<GetUsers>(`users?count=${pageSize}&page=${pageSelected}`).then(response => response.data)
    },
    setFollow(userId: number) {
        return instance.post<MyResponseType>(`follow/${userId}`).then(response => response.data)
    },
    setUnfollow(userId: number) {
        return instance.delete<MyResponseType>(`follow/${userId}`).then(response => response.data)
    }
}