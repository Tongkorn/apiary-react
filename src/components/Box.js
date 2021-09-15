import React from "react";
import { Link } from "react-router-dom";

function Box(props) {
    return (
        <div className="grid__item box">
            {props.link && <Link className="link" to={props.link}>{props.children}</Link>}
            {!props.link && props.children}
        </div >
    )
}
export default Box;