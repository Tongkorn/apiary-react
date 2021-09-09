import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProjectDataAvalyst from "./ProjectDataAnalyst";
import ProjectDataSci from "./ProjectDataSci";
import ProjectWebDev from "./ProjectWebdev";

function SectionProjects({ onCtaClick }) {
    return (
        <Router>
            <section class="tasks">
                <div class="tasks__wrapper">
                    <div class="tasks__buttons">
                        <Link class="cta task__button" to="/webdev">Web development</Link>
                        <Link class="cta task__button" to="/data-analyst">Data analysis</Link>
                        <Link class="cta task__button" to="/data-science">Datascience</Link>
                    </div>
                    <Switch>
                        <Route path="/webdev">
                            <ProjectWebDev />
                        </Route>
                        <Route path="/data-analyst">
                            <ProjectDataAvalyst />
                        </Route>
                        <Route path="/data-science">
                            <ProjectDataSci />
                        </Route>
                    </Switch>

                    <div className="project__review-buttons">
                        <button className="cta">More projects</button>
                        <button className="cta cta_theme_dark" onClick={onCtaClick}>Delegate a task</button>
                    </div>
                </div>
            </section>
        </Router>
    )
}

export default SectionProjects;