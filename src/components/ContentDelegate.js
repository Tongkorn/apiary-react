import React from "react";

function ContentDelegate(props) {
    return (
        <section className="delegate" id={`${props.id}`}>
            <div className="delegate__wrapper">
                <div className="delegate__text-wrapper">
                    <h2 className="delegate__title">
                        {props.content.title}
                    </h2>
                    <p className="delegate__subtitle">{props.content.subtitle}</p>
                </div>
                <img src={props.content.image} alt="people with laptop" className="delegate__image" />
            </div>
        </section>
    )
}

export default ContentDelegate;