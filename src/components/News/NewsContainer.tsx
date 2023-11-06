import styles from "./News.module.css"
import {AppStateType} from "../../redux/redux-store";
import {getNewsThunkCreate, NewsItemType} from "../../redux/news-reducer";
import {connect} from "react-redux";
import React, {FunctionComponent, useEffect} from "react";
import News from "./News";

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const NewsContainer: React.FC<PropsType> = ({news, getNewsThunkCreate}) => {
    useEffect(() => {
        debugger
        getNewsThunkCreate()
    }, [])

    return (
        <News news={news}/>
    );
}


type MapStateToPropsType = {
    news: Array<NewsItemType>
}

type MapDispatchToPropsType = {
    getNewsThunkCreate: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        news: state.newsPage.news
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType>(mapStateToProps, {getNewsThunkCreate})(NewsContainer) as FunctionComponent