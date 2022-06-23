import './App.css';
import React, {useEffect, useState} from "react";
import NewsCard from "./component/NewsCard";

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ed5bdb9a00ac4151b1b103c92bbbd65b";

function App() {

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

    return (
        <div className="App">
            {
                news.map((news) => (
                    <NewsCard news={news}/>
                ))
            }
        </div>
    );
}

export default App;
