import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem/NewsItem";
import styles from "./News.module.css"
import NewsLoader from "../common/MyLoader/NewsLoader/NewsLoader";
import {NewsItemType} from "../../types/types";

type PropsType = {
    news: Array<NewsItemType>
    getNewsThunkCreate: (setLastList: (newLastList: boolean) => void) => void
    lastList: boolean
    setLastList: (newLastList: boolean) => void
}
const News: React.FC<PropsType> = ({news, getNewsThunkCreate, lastList, setLastList}) => {
    const [currPage, setCurrPage] = useState(1)

    useEffect(() => {
        getNewsThunkCreate(setLastList);
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [currPage])

    const handleScroll = () => {
        debugger
        let userScrollHeight = window.scrollY + window.innerHeight
        // debugger
        if (document.getElementById("news") && userScrollHeight >= document.getElementById("news").offsetHeight && !lastList) {
            setCurrPage(currPage + 1)
        }
    }
    return (
        <main id={"news"}>
            <header className={styles.header}>
                <h2>News</h2>
            </header>
            {/*<NewsLoader/>*/}
            <div className={styles.newsContainer}>
                {news.map(n => <NewsItem headline={n}/>)}
            </div>
        </main>
    )
}

export default News