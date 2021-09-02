import React, { useEffect } from "react";
import { contentBubble } from "../data";
import Aos from "aos";
import "aos/dist/aos.css";

function SectionBubble({ onCtaClick }) {
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  return (
    <section className="bubble" id="about">
      <div className="bubble__content">
        <h2 className="bubble__title">{contentBubble.title}</h2>
        {contentBubble.messages.map((message) => (
          <div className="bubble__items" key={message.id}>
            <div className="bubble__item-wrapper">
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="bubble__item bubble__avatar"
              >
                <img
                  src={`${contentBubble.image}`}
                  className="bubble__avatar-pic"
                  alt="message avatar"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="bubble__item bubble__msg_bg_orange"
              >
                <p className="bubble__text bubble__text_theme_dark">
                  {message.left}
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className="bubble__item bubble__msg_bg_white"
            >
              <p className="bubble__text">{message.right}</p>
            </div>
          </div>
        ))}
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="bubble__cta"
        >
          <button className="cta cta_theme_dark" onClick={onCtaClick}>Delegate a task</button>
        </div>
      </div>
    </section>
  );
}

export default SectionBubble;
