import {authThunkCreate} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsType} from "./redux-store";


let initialState = {
    initialized: false
}

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

const actions = {
    setInitialized: () => {
        return {
            type: "SET_INITIALIZED"
        } as const
    }
}

type ActionsType = InferActionsType<typeof actions>;


export const initializeApp = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    dispatch(authThunkCreate()).then(() => dispatch(actions.setInitialized()))
}

export default appReducer;