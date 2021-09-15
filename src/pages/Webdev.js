import React from "react";
import webdev from "../images/projects/webdev.svg";
import ProjectWebDev from "../components/ProjectWebdev";
import SectionDelegate from "../components/SectionDelegate";
import { contentWebdevProject } from "../data.js";
import Box from "../components/Box";

function Webdev({ onCtaClick }) {
    return (
        <main className="main" id="main">
            <section className="landing project__page">
                <div className="landing__text-wrapper project__page-text-wrapper">
                    <h1 className="landing__heading">
                        {contentWebdevProject.mainTitle}
                    </h1>
                    <p className="landing__subheading">{contentWebdevProject.mainSubtitle}</p>
                </div>
                <img
                    src={`${webdev}`}
                    alt="web developement"
                />
            </section>
            <div className="grid grid__items">
                {contentWebdevProject.items.map(item => (
                    <Box key={item.boxNum}>
                        <h2 className="box-num">{item.boxNum}</h2>
                        <p className="box__title">{item.boxTitle}</p>
                        <p className="box__subtitle">{item.boxSubtitle}</p>
                    </Box>))}
            </div>
            <SectionDelegate content={contentWebdevProject} />
            <section className="tasks">
                <div className="tasks__wrapper">
                    <ProjectWebDev />
                    <div className="project__review-buttons">
                        <button className="cta">More projects</button>
                        <button className="cta cta_theme_dark" onClick={onCtaClick}>Delegate a task</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Webdev;