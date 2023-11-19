import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {BaseThunkType, InferActionsType} from "./redux-store";
import {usersAPI} from "../api/usersAPI";
import {MyResponseType} from "../api/api";
import {ThunkDispatch} from "redux-thunk";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 9,
    totalUserCount: 0,
    pageSelected: 1,
    term: '',
    category: null as null | boolean,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of userId
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    } else {
                        return u
                    }
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    } else {
                        return u
                    }
                })
            }
        case "SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "CHANGE_SELECTED_PAGE":
            return {
                ...state,
                pageSelected: action.page
            }
        case "SET_TOTAL_USER_COUNT":
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        case "TOGGLE_IS_FETCHING":
            debugger
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        case "SET_CATEGORY":
            return {
                ...state,
                category: action.category
            }
        case "SET_TERM":
            return {
                ...state,
                term: action.term
            }
        default:
            return state;

    }

}

//Action

export const UsersActions = {
    followSuccess: (userId: number) => {
        return {type: "FOLLOW", userId} as const
    },
    unfollowSuccess: (userId: number) => {
        return {type: "UNFOLLOW", userId} as const
    },
    setUsers: (users: Array<UserType>) => {
        return {type: "SET_USERS", users} as const
    },
    changeSelectedPage: (page: number) => {
        return {
            type: "CHANGE_SELECTED_PAGE",
            page: page
        } as const
    },
    setTotalUserCount: (totalCount: number) => {
        return {
            type: "SET_TOTAL_USER_COUNT",
            totalCount
        } as const
    },
    toggleIsFetching: (isFetching: boolean) => {
        return {
            type: "TOGGLE_IS_FETCHING",
            isFetching
        } as const
    },
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => {
        return {
            type: "TOGGLE_IS_FOLLOWING_PROGRESS",
            isFetching, userId
        } as const
    },
    setCategory: (category: boolean | null) => {
        return {
            type: "SET_CATEGORY",
            category: category
        } as const
    },
    setTerm: (term: string) => {
        return {
            type: "SET_TERM",
            term: term
        } as const
    }
}

export type UsersActionsType = InferActionsType<typeof UsersActions>
export type UsersThunkAction = BaseThunkType<UsersActionsType>

//Thunk Action

export const getUsers = (pageSize: number, pageSelected: number, term: string = '', category: boolean | null = null): UsersThunkAction => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        dispatch(UsersActions.toggleIsFetching(true));
        dispatch(UsersActions.setCategory(category))
        dispatch(UsersActions.setTerm(term))
        let response = await usersAPI.getUsers(pageSize, pageSelected, term, category);
        dispatch(UsersActions.toggleIsFetching(false));
        dispatch(UsersActions.setUsers(response.items));
        dispatch(UsersActions.setTotalUserCount(response.totalCount))
    }
}

export const setUnfollow = (id: number): UsersThunkAction =>
    async (dispatch) => {
        await _setFollowUnfollow(dispatch, id, usersAPI.setUnfollow.bind(usersAPI), UsersActions.unfollowSuccess);
    }

export const setFollow = (id: number): UsersThunkAction =>
    async (dispatch) => {
        await _setFollowUnfollow(dispatch, id, usersAPI.setFollow.bind(usersAPI), UsersActions.followSuccess);
    }

const _setFollowUnfollow = async (dispatch: Dispatch<UsersActionsType>, userId: number, apiMethod: (userId: number) => Promise<MyResponseType>, actionCreator: (userId: number) => UsersActionsType) => {
    dispatch(UsersActions.toggleFollowingInProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(UsersActions.toggleFollowingInProgress(false, userId))
}
export default usersReducer;