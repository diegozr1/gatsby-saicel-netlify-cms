import React from "react";

import { Button } from "../../../components";

import { StudyImgLeft, StudyImgRight } from "../../../img";

import "./StudySection.css";

const StudySection = () => (
    <section className="study-section">
        <div className="study-section--container">
            <div className="study-section--left-side">
                <img src={StudyImgLeft} alt="study-img-left" className="study-section--img-left"/>
                <p className="study-section--text-left">
                    Desde el punto de vista básico, constituyen un
                    inmejorable tratamiento para la renovación celular.
                </p>
                <p className="study-section--report">
                    Reportes recientes, tanto in vitro como in vivo, han demostrado una mayor
                    plasticidad celular, ya que son capaces de diferenciarse a adipocitos,
                    condrocitos, osteoblastos, neuronas, hepatocitocitos y células pancreáticas.
                </p>
            </div>
            <div className="study-section--right-side">
                <h3 className="study-section--main-text">
                    Descubre todas las posibilidades de regeneración celular
                </h3>
                <img src={StudyImgRight} alt="study-img-right" className="study-section--img-right"/>
                <p className="study-section--description">
                    Las células mesenquimales poseen un gran potencial de diferenciación a diversos tejidos
                    como hueso, cartílago, neuronas, etc... <br />Es por eso que se utilizan como tratamiento de
                    enfermedades crónicas, neurodegenerativas, autoinmunes y cardiovasculares; Sin embargo,
                    su potencial depende de distintas características de la patología o el paciente
                </p>
                <Button type="primary" link="/our-lab">Mira los casos de estudio</Button>
            </div>
        </div>
    </section>
);

export default StudySection;
