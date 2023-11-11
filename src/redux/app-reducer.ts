import {authThunkCreate} from "./auth-reducer";
import {BaseThunkType, InferActionsType} from "./redux-store";


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

export const initializeApp = (): BaseThunkType<ActionsType> => async (dispatch) => {
    dispatch(authThunkCreate()).then(() => dispatch(actions.setInitialized()))
}

export default appReducer;