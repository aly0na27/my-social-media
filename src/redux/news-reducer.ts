import {AppStateType, InferActionsType} from "./redux-store";
import {newsAPI} from "../api/news_api";
import {ThunkAction} from "redux-thunk";
import {NewsItemType} from "../types/types";

const initialState = {
    news: [] as Array<NewsItemType>,
    nextPage: ""
}

type InitialStateType = typeof initialState
const newsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_NEWS": {
            debugger
            return {
                ...state,
                news: [...state.news, ...action.news]
            }
        }
        case "SET_NEXT_PAGE": {
            return {
                ...state,
                nextPage: action.newPage
            }
        }
        default:
            return state
    }
}

const actions = {
    setNewsActionCreate: (news: Array<NewsItemType>) => {
        return {
            type: "SET_NEWS",
            news: news
        } as const
    },
    setNextPage: (newPage: string) => {
        return {
            type: "SET_NEXT_PAGE",
            newPage: newPage
        } as const
    }
}

type ActionsType = InferActionsType<typeof actions>

// Thunk

export const getNewsThunkCreate = (setLastList: (newLasList: boolean) => void,): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch, getState) => {
    let data = await newsAPI.getAllNews(getState().newsPage.nextPage)
    debugger
    if (!data.nextPage.length) {
        setLastList(true)
    } else {
        dispatch(actions.setNextPage(data.nextPage))
        dispatch(actions.setNewsActionCreate(data.results))
    }
}

export default newsReducer


