import React from "react";
import PropTypes from "prop-types";
import styles from "./ErrorMessage.module.css";

function ErrorMessage({ children }) {
    return <div className={styles.error}>{children}</div>;
}

ErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorMessage;
