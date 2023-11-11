import {AppStateType} from "./redux-store";
import {newsAPI} from "../api/news_api";
import {ThunkAction} from "redux-thunk";

const SET_NEWS = "SET_NEWS";
const SET_NEXT_PAGE = "SET_NEXT_PAGE"

export type NewsItemType = {
    article_id: string
    title: string
    description: string,
    link: string
    keywords: Array<string>
    creator: Array<string>
    video_url: null | string,
    content: string
    pubDate: string
    image_url: string
    source_id: string
    source_priority: number
    country: Array<string>
    category: Array<string>
    language: string
}

const initialState = {
    news: [] as Array<NewsItemType>,
    nextPage: ""
}

type InitialStateType = typeof initialState
const newsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_NEWS: {
            debugger
            return {
                ...state,
                news: [...state.news, ...action.news]
            }
        }
        case SET_NEXT_PAGE: {
            return {
                ...state,
                nextPage: action.newPage
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

type SetNextPageType = {
    type: typeof SET_NEXT_PAGE,
    newPage: string
}

type ActionsType = SetNewsActionType | SetNextPageType

const setNewsActionCreate = (news: Array<NewsItemType>): SetNewsActionType => {
    return {
        type: SET_NEWS,
        news: news
    }
}

const setNextPage = (newPage: string): SetNextPageType => {
    return {
        type: SET_NEXT_PAGE,
        newPage: newPage
    }
}

// Thunk

export const getNewsThunkCreate = (setLastList: (newLasList: boolean) => void,): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch, getState) => {
    let data = await newsAPI.getAllNews(getState().newsPage.nextPage)
    debugger
    if (!data.nextPage.length) {
        setLastList(true)
    } else {
        dispatch(setNextPage(data.nextPage))
        dispatch(setNewsActionCreate(data.results))
    }
}

export default newsReducer


