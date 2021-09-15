import React from "react";
import { Link } from "react-router-dom";

function Box(props) {
    return (
        <Link className={`grid__item box link  ${!props.link ? 'disabled-link' : ''}`} to={props.link ? props.link : ''}>{props.children}</Link>
    )
}
export default Box;