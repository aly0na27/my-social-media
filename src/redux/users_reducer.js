const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: []
    // users: [
    //     {id: 1, followed: true, fullName: "Dmitry", status: "I'm a boss", location: {city: "Ukraine", country: "Kiev"}},
    //     {id: 2, followed: false, fullName: "Alex", status: "I'm a boss too", location: {city: "Russia", country: "Moscow"}},
    //     {id: 3, followed: true, fullName: "John", status: "I'm happy", location: {city: "USA", country: "New-York"}},
    //     {id: 4, followed: true, fullName: "Andrew", status: "I'm so tired", location: {city: "USa", country: "Boston"}}
    // ]
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
            debugger;
            return {
                ...state,
                users: [...state.users, ...action.users]
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
export default usersReducer;