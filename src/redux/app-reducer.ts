import {authThunkCreate} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

type SetInitializedTypeCreate = {
    type: typeof SET_INITIALIZED,
}

export type InitialStateAppType = {
    initialized: boolean
}
let initialState: InitialStateAppType = {
    initialized: false
}



const appReducer = (state: InitialStateAppType = initialState, action: SetInitializedTypeCreate):InitialStateAppType => {
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

export const setInitialized = ():SetInitializedTypeCreate => {
    return  {
        type: SET_INITIALIZED
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authThunkCreate());

    promise.then(() => dispatch(setInitialized()))

}

export default appReducer;