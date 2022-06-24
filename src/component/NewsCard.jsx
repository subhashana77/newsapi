import React from "react";

const NewsCard = ({news},{i}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-4 single-card">
            <a className="text-decoration-none" href={news.url} target="_blank"  rel="noreferrer">
                <div className="news-card p-3 pb-1 rounded mb-4" key={i}>
                    <h5 className="mb-2">{news.title}</h5>
                    <div className="image-wrap">
                        <img className="w-100" src={news.urlToImage !== "N/A" ? news.urlToImage : "https://via.placeholder.com/400"} alt={news.title}/>
                    </div>
                    <p className="mt-3 mb-1">{news.description}</p>
                    <div className="row">
                        <div className="col-6 news-card-footer mt-2">
                            <p>{news.author}</p>
                        </div>
                        <div className="col-6 news-card-footer mt-2">
                            <p className="float-end">{(news.publishedAt).substring(0, 10)}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default NewsCard;