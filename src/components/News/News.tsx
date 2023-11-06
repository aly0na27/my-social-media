import React from "react";
import {NewsItemType} from "../../redux/news-reducer";
import NewsItem from "./NewsItem/NewsItem";

type PropsType = {
    news: Array<NewsItemType>
}
const News: React.FC<PropsType> = ({news}) => {
    return (
        <main >
            {news.map(n => <NewsItem headline={n}/>)}
        </main>
    )
}

export default News