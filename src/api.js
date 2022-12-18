import axios from "axios";

export const getNewsList = async() => {
    const news = await axios.get(`${process.env.REACT_APP_BASEURL}/v1/cnn-news`);

    return news.data.data;
}

export const searchNews = async(input) => {
    const search = await axios.get(`${process.env.REACT_APP_BASEURL}/v1/cnn-news?title=${input}`);

    return search.data.data;
}