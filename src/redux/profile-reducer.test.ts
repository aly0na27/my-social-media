import profileReducer, {ProfileActions} from "./profile-reducer";

let initialState = {
    posts: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            likesCount: 23
        },
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            likesCount: 47
        },
        {
            id: 3,
            message: "вот тебе и мяу, вот тебе и реакт...",
            likesCount: 190}
    ],
    profile: null,
    status: "",
    isUpdateProfile: false,
    myProfilePhoto: null
}
test('length of posts should be incremented', () => {
    let action = ProfileActions.addPostCreateAction("it")
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)
})

test('message of new post should be correct', () => {
    let action = ProfileActions.addPostCreateAction("it");

    let newState = profileReducer(initialState, action);

    expect(newState.posts[3].message).toBe("it")
})