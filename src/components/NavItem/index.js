import React from "react";
import { Link } from 'gatsby'

import "./NavItem.css";

const NavItem = ({ link, text, icon, alt }) => (
    <Link className="nav-item--link" to={link}> <span>{text}</span> <img src={icon} alt={alt}/> </Link>
);

export default NavItem;
