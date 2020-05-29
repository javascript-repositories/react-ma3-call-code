import React from "react";
import PropTypes from "prop-types";

function NewsList({ newsItems }) {
    console.log(newsItems);

    const newsArray = newsItems.split(",");
    console.log(newsArray);

    return (
        <>
            <div>{newsItems}</div>
            <ul>
                {newsArray.map(function (item) {
                    // console.log("each item: " + item);
                    return <li>{item}</li>;
                })}
                {/* <li>First</li>
                <li>Second</li>
                <li>Third</li> */}
            </ul>
        </>
    );
}

NewsList.propTypes = {
    newsItems: PropTypes.string.isRequired,
};

export default NewsList;
