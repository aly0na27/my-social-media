const ADD_MUSIC = "ADD_MUSIC";
const DELETE_MUSIC = "DELETE_MUSIC";

const initialState = {
    musics: [
        {
            id: 1,
            name: "Don't panic",
            musicians: "Coldplay",
            status: false
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
    ]
}
const musicsReducer = (state = initialState, action) => {
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

export const addMusicCreateAction = (userId) => {
    return {
        type: ADD_MUSIC,
        userId: userId
    }
}

export const deleteMusicCreateAction = (userId) => {
    return {
        type: DELETE_MUSIC,
        userId: userId
    }
}

export default musicsReducer;
