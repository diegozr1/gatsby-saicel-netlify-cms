import React from "react";

import {
    Button,
    CountCard,
    SectionName,
} from "../../../../components";
import {
    LabImage,
} from "../../../../img";

import "./LabSection.css";

const LabSection = () => (
    <section className="lab-section">
        <SectionName sectionName="Nuestros laboratorio" />
        <div className="lab-section--container">
            <div className="lab-section--header">
                <div className="lab-section--title">
                    <h3 className="lab-title--main-text">
                        La terapia celular es nuestra pasión, no es nuestro negocio
                    </h3>
                    <Button link="/our-lab">Conoce nuestro laboratorio</Button>
                </div>
                <p className="lab-title--description">
                    Nuestro trabajo científico pertenece a la parte moderna de la medicina:
                    no ofertamos milagros, ofertamos ciencia. Sometemos nuestro linaje celular a
                    estudios de fenotipo, microbiológico y técnicas de PCR, entregando un certificado de calidad.
                </p>
            </div>
            <div className="lab-section--main">
                <div className="lab-section--left">
                    <img src={LabImage} alt="lab-img"/>
                </div>
                <div className="lab-section--right">
                    <CountCard
                        counter={657}
                        title="Lotes para laboratorios"
                        range="2010 - 2019"
                        className="lab-section--count-card"
                    />
                    <Button type="primary" link="#contact"> Contactanos </Button>
                </div>
            </div>
        </div>
    </section>
);

export default LabSection;
