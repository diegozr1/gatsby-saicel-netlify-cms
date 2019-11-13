import React from "react";
import Fade from "react-reveal/Fade";

import {
    Card,
    SectionName,
} from "../../../components";

import {
    CardImage,
    CardImage1,
    CardImage2,
    PressIcon
} from "../../../img";

import "./PressSection.css";

const PressSection = ({ history }) => (
    <section className="press-section">
        <SectionName sectionName="Press" icon={PressIcon} alt="press-icon" />
        <div className="press-section--container">
            <h3 className="press-title--main-text">
                Entérate de lo más nuevo sobre terapia celular
            </h3>
            <div className="press-section--cards-container">
                <Fade right={true}>
                    <Card
                        history={history}
                        img={CardImage}
                        link="/faq"
                        title="Biotecnologías que nos hacen únicos"
                        date="19 Jun 2019"
                    />
                </Fade>
                <Fade right={true} delay={500}>
                    <Card
                        history={history}
                        img={CardImage1}
                        link="/faq"
                        title="Biotecnologías que nos hacen únicos"
                        date="19 Jun 2019"
                    />
                </Fade>
                <Fade right={true} delay={1000}>
                    <Card
                        history={history}
                        img={CardImage2}
                        link="/faq"
                        title="Biotecnologías que nos hacen únicos"
                        date="19 Jun 2019"
                    />
                </Fade>
            </div>
        </div>
    </section>
);

export default PressSection;
