import React from "react";

const NewsCard = ({news}) => {
    return (
        <div className="newsCard" key={new Date().valueOf()}>
            <h2>{(news.title)}</h2>
        </div>
    );
}

export default NewsCard;