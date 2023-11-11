import axios from "axios"

const instance = axios.create({
    baseURL: "https://newsdata.io/api/1"
    // baseURL: "https://api.thenewsapi.com/v1/news",
})

export const newsAPI = {
    getAllNews(nextPage: string) {
        return instance.get("/news?apikey=pub_3246529bd8a2fd86c1a28a0775eba5a861489&size=10&image=1&language=ru"
            + (nextPage ? "&page=" + nextPage : ""))
            .then(response => response.data)
    }
}

