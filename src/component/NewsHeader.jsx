import React from "react";
import NPLogo from "../asset/logo.png"
import SearchIcon from "../asset/search.png"

const NewsHeader = ({setNewsTitle}) => {
    // const [findNews, setFindNews] = useState("");

    return (
        <div className="navigation-bar w-100">
            <div className="container d-flex">
                <div className="logo float-start ms-0 m-auto w-auto">
                    <img
                        className="pt-1 pb-1"
                        src={NPLogo}
                        alt="News Paper Today"
                    />
                </div>
                <div className="search float-end me-0 m-auto d-flex w-50">
                    <input
                        className="mb-auto mt-auto w-100"
                        type="text"
                        placeholder="Search news...."
                        // value={findNews}
                        // onChange={(event => setNewsTitle(event.target.value))}
                    />
                    <img
                        className="mb-auto mt-auto"
                        src={SearchIcon}
                        alt="Search"
                    />
                </div>
            </div>
        </div>
    );
}

export default NewsHeader;