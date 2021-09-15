import React from "react";
import dataAnalysis from "../images/projects/dataAnalysis.svg";
import ProjectDataAnalyst from "../components/ProjectDataAnalyst";
import SectionDelegate from "../components/SectionDelegate";
import { contentDataAnalysisProject } from "../data.js";
import Box from "../components/Box";

function DataAnalysis({ onCtaClick }) {
    return (
        <main className="main" id="main">
            <section className="landing project__page">
                <div className="landing__text-wrapper project__page-text-wrapper">
                    <h1 className="landing__heading">
                        {contentDataAnalysisProject.mainTitle}
                    </h1>
                    <p className="landing__subheading">{contentDataAnalysisProject.mainSubtitle}</p>
                </div>
                <img
                    src={`${dataAnalysis}`}
                    alt="Data Analysis"
                />
            </section>
            <div className="grid grid__items">
                {contentDataAnalysisProject.items.map(item => (
                    <Box key={item.boxNum} id="box-dataAnalysis">
                        <h2 className="box-num">{item.boxNum}</h2>
                        <p className="box__title">{item.boxTitle}</p>
                        <p className="box__subtitle">{item.boxSubtitle}</p>
                    </Box>))}
            </div>
            <SectionDelegate content={contentDataAnalysisProject} />
            <section className="tasks">
                <div className="tasks__wrapper">
                    <ProjectDataAnalyst />
                    <div className="project__review-buttons">
                        <button className="cta">More projects</button>
                        <button className="cta cta_theme_dark" onClick={onCtaClick}>Delegate a task</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default DataAnalysis;