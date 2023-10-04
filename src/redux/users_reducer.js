const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_SELECTED_PAGE = "CHANGE_SELECTED_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 26,
    pageSelected: 1,
    isFetching: true
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
        default:
            return state;

    }

}

export const followCreateAction = (userId) => {
    return {type: FOLLOW, userId};
}

export const unfollowCreateAction = (userId) => {
    return {type: UNFOLLOW, userId};
}

export const setUsersCreateAction = (users) => {
    return {type: SET_USERS, users}
}

export const changeSelectedPageCreateAction = (page) => {
    return {
        type: CHANGE_SELECTED_PAGE,
        page: page
    }
}

export const setTotalUserCountCreateAction = (totalCount) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount
    }
}

export const setIsFetchingCreateAction = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export default usersReducer;