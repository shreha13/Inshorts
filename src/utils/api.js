import axios from "axios"
import { NEWS_API } from "./constants";

// export const getTrendingTopics = async () => {
//     const resp = await axios.get("https://inshorts.com/api/en/search/trending_topics")
//     return resp;
// }

export const getAllNews = async ({ topic, newsOffset}) => {
    newsOffset = newsOffset || 10;
    let url=NEWS_API + "&pageSize=" + newsOffset;
    if(topic) url += '&category='+topic;
    const resp = await axios.get(url)
    return resp;
}