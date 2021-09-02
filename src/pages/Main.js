import React from "react";
import meditateGirl from "../images/meditate-girl.png";
import SectionWhyUseful from "../components/SectionWhyUseful";
import SectionWhyChooseUs from "../components/SectionWhyChooseUs";

import SectionDelegate from "../components/SectionDelegate";
import SectionHowToStart from "../components/SectionHowToStart";
import SectionBubble from "../components/SectionBubble";
import SectionWhatRequests from "../components/SectionWhatRequests";

function Main({ onCtaClick }) {
  return (
    <main className="main" id="main">
      <section className="landing">
        <div className="landing__text-wrapper">
          <h1 className="landing__heading">
            <span>Your task. Done by data and web development students.</span>
            <span className="heading_span">For free!</span>
          </h1>
          <button className="cta cta_theme_dark landing__button" onClick={onCtaClick}>
            Delegate a task
          </button>
        </div>
        <img
          src={`${meditateGirl}`}
          alt="meditation-girl"
          className="landing__image"
        />
        <button className="cta cta_theme_dark landing__button show__device-mobile" onClick={onCtaClick}>
          Delegate a task
        </button>
      </section>
      <SectionWhyUseful />
      <SectionWhatRequests />
      <SectionBubble onCtaClick={onCtaClick} />
      <SectionHowToStart  onCtaClick={onCtaClick}/>
      <SectionWhyChooseUs />
      <SectionDelegate />
    </main>
  );
}

export default Main;
