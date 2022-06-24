import './App.css';
import React, {useEffect, useState} from "react";
import NewsCard from "./component/NewsCard";
import NewsHeader from "./component/NewsHeader";

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2e1cd766b1874fc0abb9c451feea40c4";

function App() {

    const [news, setNews] = useState([]);
    const [findNews, setFindNews] = useState("");

    const searchNews = async () => {
        const response = await fetch(`${API_URL}`);
        const data = await  response.json();
        setNews(data.articles);
    }

    const setNewsTitle = (newsTitle) => {
        setFindNews(newsTitle);
    }

    let searchableTitle = "";

    for (let i = 0; i < news.length; i++) {
        if (findNews === news[i].title) {
            searchableTitle = news[i].title;
        }
    }

    console.log("Title : " + searchableTitle);

    useEffect(() => {
        searchNews();
    },[]);

    return (
        <>
            <NewsHeader setNewsTitle={setNewsTitle}/>
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
        </>
    );
}

export default App;
