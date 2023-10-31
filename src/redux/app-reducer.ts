import {authThunkCreate} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false
}

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type ActionsType = SetInitializedTypeCreate;


type SetInitializedTypeCreate = {
    type: typeof SET_INITIALIZED,
}

export const setInitialized = (): SetInitializedTypeCreate => {
    return {
        type: SET_INITIALIZED
    }
}

export const initializeApp = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    dispatch(authThunkCreate()).then(() => dispatch(setInitialized()))
}

export default appReducer;