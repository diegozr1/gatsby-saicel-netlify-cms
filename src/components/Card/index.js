import React from "react";

import "./Card.css";

const Card = ({ date, img, link, history, tag, title }) => {
    const handleOnClick = () => history.push(link);
    return (
        <div className="card" onClick={handleOnClick}>
            <div className="card--img-container">
                <img src={img} alt="card-img"/>
            </div>
            <div className="card--container">
                {!!tag && <span className="card--tag"> {tag}</span>}
                <h4 className="card--title"> {title} </h4>
                <span className="card--date">{`Press - ${date}`}</span>
            </div>
        </div>
    );
};

export default Card;
