import {authThunkCreate} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

type SetInitializedTypeCreate = {
    type: typeof SET_INITIALIZED,
}

type InitialStateTypeCreate = {
    initialized: boolean
}
let initialState: InitialStateTypeCreate = {
    initialized: false
}



const appReducer = (state: InitialStateTypeCreate = initialState, action: SetInitializedTypeCreate) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitialized = () => {
    const setInitialized: SetInitializedTypeCreate = {
        type: SET_INITIALIZED
    }
    return setInitialized
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authThunkCreate());

    promise.then(() => dispatch(setInitialized()))

}

export default appReducer;