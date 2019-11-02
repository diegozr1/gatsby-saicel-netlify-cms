import React from "react";

import { Button, SectionName } from "../../../components";
import { CellPageCover } from "../../../img";

import "./MainSection.css";

const MainSection = () => (
    <section className="main-section">
        <div className="main-section--container">
            <div className="main-section--title">
                <SectionName sectionName="Células Madre" />
                <h3 className="main-section--main-text">
                    Todo sobre las células madre y sus posibilidades de regenerar nuestro cuerpo
                </h3>
            </div>
            <img src={CellPageCover} alt="cell-page-cover" className="main-section--cover-img"/>
            <div className="main-section--secondary">
                <p className="main-section--description">
                    <strong>¿Por dónde empezar?</strong> Las células madre mesenquimales son células que tienen
                    la capacidad de autorrenovarse,
                    es decir, de formar células idénticas a las células de origen y de diferenciarse a células
                    de uno o más tejidos especializados.
                </p>
                <Button link="/patologia"> Descubre más </Button>
            </div>
        </div>
    </section>
);

export default MainSection;
