import React from "react";
import Fade from "react-reveal/Fade";

import {
    Button,
    CountCard,
    SectionName,
} from "../../../components";
import { CellImage } from "../../../img";

import "./CellSection.css";

const CellSection = () => (
    <Fade>
        <section id="cells" className="cells-section">
            <SectionName sectionName="Células Madre" />
            <div className="cells-section--container">
                <div className="cells-section--title">
                    <Fade left={true}>
                        <h3 className="cells-title--main-text">
                            Descubre todas las posibilidades de regeneración celular
                        </h3>
                    </Fade>
                    <Fade right={true}>
                        <div className="cells-title--secondary-text">
                            <p className="cells-title--description">
                                Trabajamos para cambiar el paradigma de medicar, a regenerar a las personas.
                            </p>
                            <div className="cells-title--button-group">
                                <Button link="/our-lab"> Descubre más </Button>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="cells-section--main">
                    <Fade bottom={true}>
                        <div className="cells-section--left">
                            <p className="cells-section--text">
                                <u>Regeneración:</u> La célula madre mesenquimal es pluripotencial,
                                lo cual significa que pueden convertirse en casi cualquier tejido del riñón,
                                nervioso, músculo, hueso, cartílago, glándulas del páncreas, etc.
                            </p>
                            <CountCard
                                counter={297}
                                title="Casos exitosos"
                                range="Enero 2016 - Junio 2019"
                                className="cells-section--count-card"
                            />
                            <Button type="primary" link="#contact"> Contactanos </Button>
                        </div>
                    </Fade>
                    <Fade duration={3000}>
                        <div className="cells-section--right">
                            <img src={CellImage} alt="cell-img"/>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    </Fade>
);

export default CellSection;
