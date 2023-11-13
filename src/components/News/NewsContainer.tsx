import styles from "./News.module.css"
import {AppStateType} from "../../redux/redux-store";
import {getNewsThunkCreate} from "../../redux/news-reducer";
import {connect} from "react-redux";
import React, {FunctionComponent, useEffect, useState} from "react";
import News from "./News";
import {NewsItemType} from "../../types/types";

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const NewsContainer: React.FC<PropsType> = ({news, getNewsThunkCreate}) => {
    const [lastList, setLastList] = useState(false)

    // useEffect(() => {
    //     debugger
    //     getNewsThunkCreate(lastList, setLastList)
    // }, [])

    return (
        <News getNewsThunkCreate={getNewsThunkCreate} news={news} lastList={lastList} setLastList={setLastList}/>
    );
}


type MapStateToPropsType = {
    news: Array<NewsItemType>
    // nextPage: string
}

type MapDispatchToPropsType = {
    getNewsThunkCreate: (setLastList: (newLastList: boolean) => void) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        news: state.newsPage.news,
        // nextPage: state.newsPage.nextPage
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType>(mapStateToProps, {getNewsThunkCreate})(NewsContainer) as FunctionComponent