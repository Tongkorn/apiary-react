import React from "react";
import { contentHowToStart } from "../data.js";

function SectionHowToStart({ onCtaClick }) {
    return (
        <section className="content" id="howtostart">
            <div className="content__wrapper">
                <h2 className="howToStart__heading">{contentHowToStart.title}</h2>
                <div className="grid grid__items howToStart__grid-items">
                    {contentHowToStart.items.map(item => (
                        <div className="grid__item" key={item.position}>
                            <img src={item.image} alt={item.title} className="grid__item-image" />
                            <p className="howToStart__text hide__device_minwidth_1024">{item.position}</p>
                            <h4 className="howToStart__title">{item.title}</h4>
                            <p className="howToStart__subtitle">{item.subtitle}</p>
                        </div>
                    ))}
                    <div className="grid__item howToStart__steps-wrapper">
                        <div className="howToStart__steps">
                            {contentHowToStart.items.map(item => (
                                <div className="howToStart__step" key={item.position}>
                                    <p className="howToStart__text">{item.position}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="howToStart__cta">
                    <button className="cta cta_theme_dark" onClick={onCtaClick}>Delegate a Task</button>
                </div>
            </div>
        </section>
    )
}

export default SectionHowToStart;