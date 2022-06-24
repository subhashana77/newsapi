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
    },[]);

    return (
        <div className="App container">
            <h1 className="w-100 text-center mt-5 mb-4">News Paper Today</h1>
            {news?.length > 0 ? (
                <div className="row">
                    {
                        news.map((news, i) => (
                            <NewsCard news={news} key={i}/>
                        ))
                    }
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default App;
