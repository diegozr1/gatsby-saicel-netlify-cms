import React from "react";
import { animated, useSpring } from "react-spring";

import "./CountCard.css";

const CountCard = ({ className, counter, title, range }) => {
    const props = useSpring({ config: { duration: 10000 }, number: counter, from: { number: 0 } });
    return (
        <div className={`count-card--container ${className}`}>
            <animated.span className="count-card--counter">
                {props.number.interpolate((numb) => Math.floor(numb))}
            </animated.span>
            <h5 className="count-card--title">
                {title}
            </h5>
            <span className="count-card--range">{range}</span>
        </div>
    );
};

export default CountCard;
