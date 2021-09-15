import React from "react";
import Box from "./Box";
import { contentWhatRequest } from "../data";

function SectionWhatRequests() {
    return (
        <section className="content" id="whatrequest">
            <div className="content__wrapper">
                <h2 className="content__heading">{contentWhatRequest.title}</h2>
                <h3 className="content__text">{contentWhatRequest.subtitle}</h3>
                <div className="grid grid__items">
                    {contentWhatRequest.items.map(item => (
                        <Box key={item.position} link={item.link}>
                            <p className="whatrequest__subtitle">{item.subtitle}</p>
                            <h4 className="whatrequest__title">{item.title}</h4>
                            <img src={`${item.image}`} alt={item.title} className="grid__item-image whatrequest__item-image" />
                        </Box>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionWhatRequests;
