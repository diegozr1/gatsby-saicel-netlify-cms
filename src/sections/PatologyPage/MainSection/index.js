import React from "react";

import { SectionName } from "../../../components";
import { CellPageCover, PatIcon } from "../../../img";

import "./MainSection.css";

const MainSection = () => (
    <section className="main-section--patology">
        <div className="main-section--container">
            <div className="main-section--title">
                <SectionName sectionName="Patologías" icon={PatIcon} alt="pat-icon" />
                <h3 className="main-section--main-text">
                    Regeneración celular para una mejor vida
                </h3>
            </div>
            <img src={CellPageCover} alt="cell-page-cover" className="main-section--cover-img"/>
            <div className="main-section--secondary">
                <p className="main-section--description-patology">
                    Algunos tratamientos en los que hemos estado involucrados con muy buenos resultados son en trastornos neurológicos como:
                </p>
            </div>
        </div>
    </section>
);

export default MainSection;
