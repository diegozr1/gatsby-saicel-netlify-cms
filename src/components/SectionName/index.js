import React from "react";

import "./SectionName.css";

const SectionName = ({ sectionName }) => (
    <div className="section-name--container">
        <span className="section-name--text">
            {sectionName}
        </span>
    </div>
);

export default SectionName;
