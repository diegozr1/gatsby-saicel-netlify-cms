import React from "react";

import "./Bullet.css";

const Bullet = ({ icon, description }) => (
    <div className="bullet--container">
        <img src={icon} alt="bullet-icon" className="bullet--icon"/>
        <p className="bullet--description">{description}</p>
    </div>
);

export default Bullet;
