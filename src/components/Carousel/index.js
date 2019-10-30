import React from "react";
import makeCarousel from "react-reveal/makeCarousel";

import "./Carousel.css";

const Carousel = ({ children, position, handleClick }) => {
    return (
        <div className="carousel--container">
            <div className="carousel--children">
                {children}
            </div>
            <span onClick={handleClick} data-position={position - 1} className="carousel--arrow-left" />
            <span onClick={handleClick} data-position={position + 1} className="carousel--arrow-right" />
        </div>
    );
};

export default makeCarousel(Carousel);
