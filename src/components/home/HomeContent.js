import React from "react";
import PropTypes from "prop-types";

function HomeContent(props) {
    return <div>{props.children}</div>;
}

HomeContent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HomeContent;
