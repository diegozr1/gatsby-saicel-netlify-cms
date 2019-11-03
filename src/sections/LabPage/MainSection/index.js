import React from "react";

import { Button, SectionName } from "../../../components";
import { LabPageCover } from "../../../img";

const MainSection = () => (
    <section className="main-section">
        <div className="main-section--container">
            <div className="main-section--title">
                <SectionName sectionName="Nuestro laboratorio" />
                <h3 className="main-section--main-text">
                    Nos gustan los casos difíciles, por lo que trabajamos mano a mano con los médicos
                </h3>
            </div>
            <img src={LabPageCover} alt="lab-page-cover" className="main-section--cover-img"/>
            <div className="main-section--secondary">
                <p className="main-section--description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button link="/patologia"> Visita nuestros casos de estudio </Button>
            </div>
        </div>
    </section>
);

export default MainSection;
