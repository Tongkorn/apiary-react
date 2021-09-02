import React from "react";
import ContentDelegate from "./ContentDelegate";
import { contentDelegateTasks } from "../data";

function SectionDelegate() {
    return (
        <ContentDelegate content={contentDelegateTasks} id="projects" />
    );
}

export default SectionDelegate;