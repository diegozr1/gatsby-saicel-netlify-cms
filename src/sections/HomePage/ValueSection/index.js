import React from "react";

import {
    Button,
    SectionName,
} from "../../../components";
import {
    CertificadoAnalisis,
    CertificadoCellCount,
    ValueImg1,
    ValueImg2,
    ValueImg3,
    LabIcon
} from "../../../img";

import "./ValueSection.css";

const ValueSection = () => {
    return (
        <section className="value-section">
            <SectionName sectionName="Nuestro Laboratorio" icon={LabIcon} alt="lab-icon" />
            <div className="value-section--container">
                <h3 className="value-title--main-text">
                    ¿Por qué somos confiables?
                </h3>
                <div className="value-section--main">
                    <div className="value-section--left">
                        <img className="value-section--img" src={CertificadoCellCount} alt="certificado-cell-count"/>
                        <img className="value-section--img" src={CertificadoAnalisis} alt="certificado-analisis"/>
                    </div>
                    <div className="value-section--right">
                        <div className="value-section--item">
                            <img src={ValueImg1} alt="value-img-1"/>
                            <span className="value-section--item-main">
                                Entregamos 2 certificados de calidad:
                            </span>
                        </div>
                        <span className="value-section--separator" />
                        <div className="value-section--item">
                            <img src={ValueImg2} alt="value-img-2"/>
                            <span className="value-section--item-text">
                                Conteo in-situ de las células que estamos enviando,
                                que incluye viabilidad de las células.
                            </span>
                        </div>
                        <div className="value-section--item">
                            <img src={ValueImg3} alt="value-img-3"/>
                            <span className="value-section--item-text">
                                Estudios de fenotipo, microbiológico y técnicas de PCR.
                            </span>
                        </div>
                        <div className="value-section--bottom">
                            <p className="value-section--description">
                                Cada lote se evalúa para la diferenciación de osteoblastos,
                                adipocitos y condrocitos de acuerdo con las normas de la ISCT
                                es decir, para los siguientes marcadores:
                                CD73+/CD90+/CD105+ and CD14-/CD19-/CD34-/CD45-HLA-DR
                            </p>
                            <Button link="/our-lab"> Nuestros Laboratorios </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueSection;
