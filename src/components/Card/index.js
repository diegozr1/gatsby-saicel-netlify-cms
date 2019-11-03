import React from "react";
import { Link } from "gatsby";

import "./Card.css";

const Card = ({ date, img, link, tag, title, description }) => {
    return (
        <Link to={link} className={"card-link"}>
            <div className="card">
                <div className="card--img-container">
                    <img src={img} alt="card-img"/>
                </div>
                <div className="card--container">
                    {!!tag && <span className="card--tag"> {tag}</span>}
                    <h4 className="card--title"> {title} </h4>
                    {!!date && <span className="card--date">{`Press - ${date}`}</span>}
                    {!!description && <p className="card--description">{ description }</p> }
                </div>
            </div>
        </Link>
    );
};

export default Card;
