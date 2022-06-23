import React, {useEffect, useState} from "react";

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ed5bdb9a00ac4151b1b103c92bbbd65b";

const Util = () => {
    const [news, setNews] = useState([]);

    const searchNews = async () => {
        const response = await fetch(`${API_URL}`);
        const data = await  response.json();
        setNews(data.articles);
        console.log(data.articles);
    }

    useEffect(() => {
        searchNews();
    });
}
