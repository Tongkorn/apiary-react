import React from "react";

function Box(props) {
    return (
        <div className="grid__item box">
            {props.children}
        </div>
    )
}

export default Box;