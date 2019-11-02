import React from "react";

import { Button } from "../../../components";

import { ISCT, SafeImgLeft, SafeImgRight } from "../../../img";

import "./SafeSection.css";

const SafeSection = () => (
    <section className="study-section">
        <div className="study-section--container">
            <div className="study-section--left-side">
                <img src={SafeImgLeft} alt="study-img-left" className="study-section--img-left"/>
                <p className="study-section--text-left">
                    La respuesta en general a esta pregunta es SÍ. <br />
                    Sin embargo, no creemos que sea “la solución” a todo.
                </p>
                <p className="study-section--report">
                    Respecto a la legislación, afortunadamente cada vez hay mas propuestas de legislación
                    en México y de protocolos de investigación que nos dan motivos para ser positivos en el
                    futuro. Sin embargo, hoy en día nuestros laboratorios cumplen con la Norma
                    Oficial NOM-059-SSA1-2015,y los lineamientos que
                    ISCT (International Society Cell & Gene Therapy) nos marcan.
                </p>
                <img src={ISCT} alt="isct" className="study-section--img-isct"/>
            </div>
            <div className="study-section--right-side">
                <h3 className="study-section--main-text sixty-five">
                    ¿Las células madre son seguras?
                </h3>
                <img src={SafeImgRight} alt="study-img-right" className="study-section--img-right"/>
                <p className="study-section--description sixty">
                    Cada caso debe ser particularmente analizado para saber si puedes o no ser candidato a un
                    transplantede células madre. Sabemos que es el mejor tratamiento para estados patológicos
                    que antes se consideraban incurables.
                </p>
                <Button type="primary" link="/our-lab">Visita nuestras preguntas frecuentes</Button>
            </div>
        </div>
    </section>
);

export default SafeSection;
