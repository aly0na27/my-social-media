import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_SELECTED_PAGE = "CHANGE_SELECTED_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 26,
    pageSelected: 1,
    isFetching: true,
    followingInProgress: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (action.userId === u.id) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case CHANGE_SELECTED_PAGE:
            return {
                ...state,
                pageSelected: action.page
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;

    }

}

export const followSuccess = (userId) => {
    return {type: FOLLOW, userId};
}

export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId};
}

export const setUsers = (users) => {
    return {type: SET_USERS, users}
}

export const changeSelectedPage = (page) => {
    return {
        type: CHANGE_SELECTED_PAGE,
        page: page
    }
}

export const setTotalUserCount = (totalCount) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleIsFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching, userId
    }
}

export const getUsers = (pageSize, pageSelected) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(pageSize, pageSelected).then((response) => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUserCount(response.totalCount / 500))
    });
}

export const setUnfollow = (id) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, id))
    usersAPI.setUnfollow(id).then(response => {
        if (response.resultCode === 0) {
            dispatch(unfollowSuccess(id));
        }
        dispatch(toggleIsFollowingProgress(false, id))
    })
}

export const setFollow = (id) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, id));
    usersAPI.setFollow(id).then(response => {
        if (response.resultCode === 0) {
            dispatch(followSuccess(id));
        }
        dispatch(toggleIsFollowingProgress(false, id))
    })
}
export default usersReducer;