import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.thenewsapi.com/v1/news",
    // headers: {
    //     "api_token": "0AImL0G3idmNHSIpXTi0BCTf1BOZ2ZolHjhIGW6v"
    // }
})

export const newsAPI = {
    getAllNews() {
        return instance.get("/all?api_token=0AImL0G3idmNHSIpXTi0BCTf1BOZ2ZolHjhIGW6v&language=en&limit=5")
            .then(res => res.data)
    }
}

