import React from "react";
import ContentWhy from "./ContentWhy";
import { contentWhyChooseUs } from "../data";

function SectionWhyChooseUs() {
    return (
        <ContentWhy content={contentWhyChooseUs} whyChooseUs={true} />
    )
}

export default SectionWhyChooseUs;