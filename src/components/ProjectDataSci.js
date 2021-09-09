import React from 'react';
import project18 from "../images/projects/image18.svg";
import project19 from "../images/projects/image19.svg";
import project1reviewer from "../images/projects/review-avatar.png";

function ProjectDataSci() {
    return (
        <div data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500">
            <div className="project">
                <div className="project__details">
                    <img src={project18} alt="project" className="project__image" />
                    <div className="project__text-wrapper">
                        <h3 className="project__title">Norbu, DA</h3>
                        <p className="project__subtitle">Norbu Stress Control is the first anti-stress app that teaches to manage stress and emotions on the physical level.</p>
                        <p className="project__subtitle">Task: to calculate main product metrics, research possible reasons for users behaviour such as retention, payments, app removal, etc. and analyze User journey behaviour.</p>
                        <p className="project__date">May 2021</p>
                        <p className="project__link">Visit Website →</p>
                    </div>
                </div>
                <div className="project__review">
                    <div className="project__review-card">
                        <div className="project__review-heading">
                            <img src={project1reviewer} alt="project avatar" className="project__review-avatar" />
                            <div className="project__review-text-wrapper">
                                <h4 className="project__review-title">Maxim Antonenko</h4>
                                <p className="project__review-subtitle">Ant Robotics CEO</p>
                            </div>
                        </div>
                        <p className="project__review-content">“The Data Analytics students have highlighted a few
                            languages which show a growing demand for translation and expanded our list of
                            keywords
                            to detect more translation-related user reviews,” Demid said. “The Data Science
                            students
                            tested a wide range of natural language processing algorithms, including deep
                            machine
                            learning...</p>
                        <p className="project__review-link">Read full review</p>
                    </div>
                    <div className="project__review-card">
                        <div className="project__review-heading">
                            <div className="project__review-avatar"></div>
                            <div className="project__review-text-wrapper">
                                <h4 className="project__review-title">Student team</h4>
                                <p className="project__review-subtitle">Maria Wright, Maria Wright, Enyel Sequeira
                                </p>
                            </div>
                        </div>
                        <p className="project__review-content">“I learned so much from it,” Xia said. “Not just
                            about
                            new packages and methods of analysis and reporting, but also workflow management,
                            how to
                            clarify task requirements, collaborate with others, and more. Those are the kind of
                            experiences I can put on my resume, and that’s awesome too.”</p>
                        <p className="project__review-link">Read full review</p>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project__details">
                    <img src={project19} alt="prim-u project" className="project__image" />
                    <div className="project__text-wrapper">
                        <h3 className="project__title">Allcorrect, DS</h3>
                        <p className="project__subtitle">Allcorrect Games provides video game localization, localization testing, voiceovers, game art, and playable ads.</p>
                        <p className="project__subtitle">Task: to analyze apps reviews about localization quality on marketplaces like App Store / Google Play / Steam.</p>
                        <p className="project__date">May 2021</p>
                        <p className="project__link">Visit Website →</p>
                    </div>
                </div>
                <div className="project__review">
                    <div className="project__review-card">
                        <div className="project__review-heading">
                            <img src={project1reviewer} alt="project reviewer avatar" className="project__review-avatar" />
                            <div className="project__review-text-wrapper">
                                <h4 className="project__review-title">Maxim Antonenko</h4>
                                <p className="project__review-subtitle">Ant Robotics CEO</p>
                            </div>
                        </div>
                        <p className="project__review-content">“The Data Analytics students have highlighted a few
                            languages which show a growing demand for translation and expanded our list of
                            keywords
                            to detect more translation-related user reviews,” Demid said. “The Data Science
                            students
                            tested a wide range of natural language processing algorithms, including deep
                            machine
                            learning...</p>
                        <p className="project__review-link">Read full review</p>
                    </div>
                    <div className="project__review-card">
                        <div className="project__review-heading">
                            <div className="project__review-avatar"></div>
                            <div className="project__review-text-wrapper">
                                <h4 className="project__review-title">Student team</h4>
                                <p className="project__review-subtitle">Maria Wright, Maria Wright, Enyel Sequeira
                                </p>
                            </div>
                        </div>
                        <p className="project__review-content">“Employee performance reviews are key to offering
                            helpful
                            feedback to managers and employees.
                            But not knowing what to say or write can make the process downright painful —
                            especially
                            when you’re on a deadline.
                            If you do annual performance reviews, it's important to get it right. This is key to
                            boosting employee engagement...</p>
                        <p className="project__review-link">Read full review</p>
                    </div>
                </div>
            </div>
        </ div>
    )
}

export default ProjectDataSci;