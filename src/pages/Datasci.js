import React from "react";
import datasci from "../images/projects/datasci.svg";
import ProjectDataSci from "../components/ProjectDataSci";
import SectionDelegate from "../components/SectionDelegate";
import { contentDataSciProject } from "../data.js";
import Box from "../components/Box";

function Datasci({ onCtaClick }) {
    return (
        <main className="main" id="main">
            <section className="landing project__page">
                <div className="landing__text-wrapper project__page-text-wrapper">
                    <h1 className="landing__heading">
                        {contentDataSciProject.mainTitle}
                    </h1>
                    <p className="landing__subheading">{contentDataSciProject.mainSubtitle}</p>
                </div>
                <img
                    src={`${datasci}`}
                    alt="Data Science"
                />
            </section>
            <div className="grid grid__items">
                {contentDataSciProject.items.map(item => (
                    <Box key={item.boxNum} id="box-datasci">
                        <h2 className="box-num">{item.boxNum}</h2>
                        <p className="box__title" > {item.boxTitle}</p>
                        <p className="box__subtitle">{item.boxSubtitle}</p>
                    </Box>))
                }
            </div >
            <SectionDelegate content={contentDataSciProject} />
            <section className="tasks">
                <div className="tasks__wrapper">
                    <ProjectDataSci />
                    <div className="project__review-buttons">
                        <button className="cta">More projects</button>
                        <button className="cta cta_theme_dark" onClick={onCtaClick}>Delegate a task</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Datasci;