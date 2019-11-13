import React from "react";

import "./SectionName.css";

const SectionName = ({ sectionName, icon, alt }) => (
    <div className="section-name--container">
        <span className="section-name--text">
            <img src={icon} alt={alt}/>
            {sectionName}
        </span>
    </div>
);

export default SectionName;
