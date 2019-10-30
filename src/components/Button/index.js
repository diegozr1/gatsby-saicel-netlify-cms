import React from "react";

import "./Button.css";

const Button = ({ children, type = "secondary", link }) => (
    <a className={`btn ${type}`} href={link}>
        <i className="material-icons"> keyboard_arrow_right </i>
        <span> {children} </span>
    </a>
);

export default Button;
