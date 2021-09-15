import React from "react";
import ContentDelegate from "./ContentDelegate";

function SectionDelegate(props) {
    return (
        <ContentDelegate content={props.content} id="projects" />
    );
}

export default SectionDelegate;