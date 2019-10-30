import React from "react";

import "./CarouselItem.css";

const CarouselItem = ({ img, title, text }) => (
    <div className="carousel-item--container">
        <div className="carousel-item--left">
            <img src={img} alt="carousel-item--img"/>
            <span className="carousel-item--title">{title}</span>
        </div>
        <div className="carousel-item--right">
            <p className="carousel-item--text">{text}</p>
        </div>
    </div>
);

export default CarouselItem;
