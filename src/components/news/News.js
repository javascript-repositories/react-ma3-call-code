import React from "react";
import Heading from "../typography/Heading";
import NewsList from "./NewsList";

function News() {
    const newsItems = "these, are, the, items";

    return (
        <div className="news-page">
            <Heading content="This is the news page" />
            <NewsList newsItems={newsItems} />
        </div>
    );
}

export default News;
