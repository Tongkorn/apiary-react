import React from "react";
import project1 from "../images/projects/ant.png";
import project2 from "../images/projects/prim-u.png";
import project1reviewer from "../images/projects/review-avatar.png";

function SectionProjects({onCtaClick}) {
    return (
        <section class="tasks">
            <div class="tasks__wrapper">
                <div class="tasks__buttons">
                    <button class="cta task__button">Web development</button>
                    <button class="cta task__button">Data analysis</button>
                    <button class="cta task__button">Datascience</button>
                </div>
                <div className="project">
                    <div className="project__details">
                        <img src={project1} alt="project" className="project__image" />
                        <div className="project__text-wrapper">
                            <h3 className="project__title">Ant Robotics</h3>
                            <p className="project__subtitle">Landing page website for the company that cakes automated
                                logistics robots from Oakland, CA</p>
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
                        <img src={project2} alt="prim-u project" className="project__image" />
                        <div className="project__text-wrapper">
                            <h3 className="project__title">Prim-U</h3>
                            <p className="project__subtitle">Main entry page for the first on-demand beauty platform
                                from
                                the South Africa</p>
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
                <div className="project__review-buttons">
                    <button className="cta">More projects</button>
                    <button className="cta cta_theme_dark" onClick={onCtaClick}>Delegate a task</button>
                </div>
            </div>
        </section>
    )
}

export default SectionProjects;