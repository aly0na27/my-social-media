const ADD_MUSIC = "ADD_MUSIC";
const DELETE_MUSIC = "DELETE_MUSIC";


type Song = {
    id: number,
    name: string,
    musicians: string,
    status: boolean
}
const initialState = {
    musics: [
        {
            id: 1,
            name: "Don't panic",
            musicians: "Coldplay",
            status: false,

        },
        {
            id: 2,
            name: "Blinding Lights",
            musicians: "The Weeknd",
            status: true
        },
        {
            id: 3,
            name: "False Alarm",
            musicians: "The Weeknd",
            status: true
        },
        {
            id: 4,
            name: "Bones",
            musicians: "Sucker",
            status: false
        },
    ] as Array<Song>
}

type InitialStateType = typeof initialState
const musicsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_MUSIC:
            return {
                ...state,
                musics: state.musics.map((m) => {
                    if (m.id === action.userId) {
                        return {
                            ...m,
                            status: true
                        }
                    }
                    return {
                        ...m
                    }
                })
            }
        case DELETE_MUSIC:
            return {
                ...state,
                musics: state.musics.map((m) => {
                    if (m.id === action.userId) {
                        return {
                            ...m,
                            status: false
                        }
                    }
                    return {
                        ...m
                    }
                })
            }
        default:
            return state;
    }
}

type AddMusicActionType = {
    type: typeof ADD_MUSIC,
    userId: number
}

type DeleteMusicActionType = {
    type: typeof DELETE_MUSIC,
    userId: number
}

export const addMusicCreateAction = (userId: number): AddMusicActionType => {
    return {
        type: ADD_MUSIC,
        userId: userId
    }
}

export const deleteMusicCreateAction = (userId: number): DeleteMusicActionType => {
    return {
        type: DELETE_MUSIC,
        userId: userId
    }
}

export default musicsReducer;