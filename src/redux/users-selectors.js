// import {createSelector} from "reselect";
import {createSelector} from "reselect";

export const getUsersState = (state) => {
    return state.usersPage.users;
}
export const getUsersSuperSelector = createSelector(getUsersState, (users) => {
    return users.filter(u => u)
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount
}

export const getPageSelected = (state) => {
    return state.usersPage.pageSelected
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
