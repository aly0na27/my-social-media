import {AppStateType} from "./redux-store";
import {newsAPI} from "../api/news_api";
import {ThunkAction} from "redux-thunk";

const SET_NEWS = "SET_NEWS";


export type NewsItemType = {
    uuid: string
    title: string
    description: string,
    url: string
    image_url: string
    published_at: string
    categories: Array<string>
    keywords: string
    snippet: string
    language: string
    source: string
    relevance_score: any
    locale: string
}

const initialState = {
    news: [] as Array<NewsItemType>
}

type InitialStateType = typeof initialState
const newsReducer = (state: InitialStateType = initialState, action: SetNewsActionType) => {
    switch (action.type) {
        case SET_NEWS: {
            debugger
            return {
                news: action.news
            }
        }
        default:
            return state
    }
}

type SetNewsActionType = {
    type: typeof SET_NEWS,
    news: Array<NewsItemType>
}

type ActionsType = SetNewsActionType
const setNewsActionCreate = (news: Array<NewsItemType>): SetNewsActionType => {
    return {
        type: SET_NEWS,
        news: news
    }
}


// Thunk

export const getNewsThunkCreate = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let data = await newsAPI.getAllNews()
    dispatch(setNewsActionCreate(data.data))
}

export default newsReducer


