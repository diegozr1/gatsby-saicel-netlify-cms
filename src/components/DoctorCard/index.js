import React from "react";

import "./DoctorCard.css";

const DoctorCard = ({ img, name, spec }) => (
    <div className="doctor-card--container">
        <img src={img} alt="doctor-card-img" className="doctor-card--img"/>
        <h5 className="doctor-card--name"> {name} </h5>
        <span className="doctor-card--spec"> {spec} </span>
    </div>
);

export default DoctorCard;
