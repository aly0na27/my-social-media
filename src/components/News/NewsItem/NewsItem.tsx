import {NewsItemType} from "../../../redux/news-reducer";
import React from "react";

type PropsType = {
    headline: NewsItemType
}
const NewsItem: React.FC<PropsType> = ({headline}) =>  {
    return  (
        <section>
            <h3>
                {headline.title}
            </h3>
            <div>
                <p>{headline.description}</p>
                <img src={headline.image_url} alt={"Image of news"}/>
            </div>
        </section>
    )
}

export default NewsItem