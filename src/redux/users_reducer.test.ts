import usersReducer from "./users_reducer";
import users_reducer, {InitialStateType, UsersActions} from "./users_reducer";
import {FilterType} from "../types/types";


let state: InitialStateType

beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: "alyona 0", status: "status 0", photos: {small: null, large: null}, followed: false
            },
            {
                id: 1, name: "alyona 1", status: "status 1", photos: {small: null, large: null}, followed: false
            },
            {
                id: 2, name: "alyona 2", status: "status 2", photos: {small: null, large: null}, followed: true
            },
            {
                id: 3, name: "alyona 3", status: "status 3", photos: {small: null, large: null}, followed: true
            },
        ],
        pageSize: 9,
        totalUserCount: 0,
        pageSelected: 1,
        isFetching: false,
        followingInProgress: [] as Array<number>, //array of userId
        filter: {} as FilterType
    }


})

test("follow", () => {
    state = usersReducer(state, UsersActions.followSuccess(1))

    expect(state.users[1].followed).toBeTruthy()
    expect(state.users[0].followed).toBeFalsy()
})

test("unfollow", () => {
    state = users_reducer(state, UsersActions.unfollowSuccess(3))

    expect(state.users[2].followed).toBeTruthy()
    expect(state.users[3].followed).toBeFalsy()
})


