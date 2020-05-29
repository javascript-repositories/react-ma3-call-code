import React from "react";
import Heading from "../typography/Heading";
import Loginform from "./LoginForm";

function Login() {
    return (
        <>
            <Heading content="Contact form" />
            <div className="error">This is a test error</div>
            <Loginform />
        </>
    );
}

export default Login;
