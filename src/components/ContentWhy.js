import React from "react";

function contentWhy(props) {
    return (
        <section className="content content_theme_dark">
            <div className="content__wrapper">
                <h2 className="content__heading content__heading_theme_dark">{props.content.title}</h2>
                <h3 className="content__text content__text_theme_dark">{props.content.subtitle}</h3>
                <div className={`${props.whyChooseUs ? 'grid grid__items grid__items-why-choose-us' : 'grid grid__items'}`}>
                    {props.content.items.map(item => (
                        <div className="grid__item" key={item.position}>
                            <img src={`${item.image}`} alt={item.title} className="grid__item-image" />
                            <h4 className="grid__title">{item.title}</h4>
                            <p className="grid__subtitle">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default contentWhy;