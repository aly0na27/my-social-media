import {NewsItemType} from "../../../redux/news-reducer";
import React from "react";
import styles from "./NewsItem.module.css"

type PropsType = {
    headline: NewsItemType
}
const NewsItem: React.FC<PropsType> = ({headline}) =>  {
    return  (
        <section className={styles.newsItem}>
            <h3>
                {headline.title}
            </h3>
            <div>
                <p>{headline.content}</p>
                <img className={styles.img} src={headline.image_url} alt={"Image of news"}/>
            </div>
        </section>
    )
}

export default NewsItem