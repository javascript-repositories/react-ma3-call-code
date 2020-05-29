import React from "react";
import Heading from "../typography/Heading";
import HomeContent from "./HomeContent";

function Home() {
    return (
        <>
            <Heading content="This is the heading right here" />
            <HomeContent>This is the children p</HomeContent>
        </>
    );
}

export default Home;
