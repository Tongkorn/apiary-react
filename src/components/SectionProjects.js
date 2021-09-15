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
    const [active, setActive] = React.useState('webdev');

    function setButtonActive(activeButton) {
        setActive(activeButton)
    }

    return (
        <Router>
            <section className="tasks">
                <div className="tasks__wrapper">
                    <div className="tasks__buttons">
                        <Link className={`cta task__button ${active === 'webdev' ? 'cta_theme_dark' : ""}`}
                            onClick={() => setButtonActive('webdev')} to="/webdev">Web development</Link>
                        <Link className={`cta task__button ${active === 'dataAnalysis' ? 'cta_theme_dark' : ""}`}
                            onClick={() => setButtonActive('dataAnalysis')} to="/data-analyst">Data analysis</Link>
                        <Link className={`cta task__button ${active === 'datasci' ? 'cta_theme_dark' : ""}`}
                            onClick={() => setButtonActive('datasci')} to="/data-science">Datascience</Link>
                    </div>
                    <Switch>
                        <Route exact path="/webdev">
                            <ProjectWebDev />
                        </Route>
                        <Route exact path="/data-analyst">
                            <ProjectDataAvalyst />
                        </Route>
                        <Route exact path="/data-science">
                            <ProjectDataSci />
                        </Route>
                        <Route path="/">
                            <ProjectWebDev />
                        </Route>
                    </Switch>
                    <div className="project__review-buttons">
                        <button className="cta">More projects</button>
                        <button className="cta cta_theme_dark" onClick={onCtaClick}>Delegate a task</button>
                    </div>
                </div>
            </section >
        </Router >
    )
}

export default SectionProjects;