import React from "react";

function ContentDelegate({content}) {
    return (
        <section className="delegate" id={`${content.id}`}>
            <div className="delegate__wrapper">
                <div className="delegate__text-wrapper">
                    <h2 className="delegate__title">
                        {content.title}
                    </h2>
                    <p className="delegate__subtitle">{content.subtitle}</p>
                </div>
                <img src={content.image} alt="people with laptop" className="delegate__image" />
            </div>
        </section>
    )
}

export default ContentDelegate;