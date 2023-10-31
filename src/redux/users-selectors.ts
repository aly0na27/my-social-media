// import {createSelector} from "reselect";
import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

export const getUsersState = (state: AppStateType) => {
    return state.usersPage.users;
}
export const getUsersSuperSelector = createSelector(getUsersState, (users) => {
    return users.filter(u => u)
})
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUserCount = (state: AppStateType) => {
    return state.usersPage.totalUserCount
}

export const getPageSelected = (state: AppStateType) => {
    return state.usersPage.pageSelected
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
