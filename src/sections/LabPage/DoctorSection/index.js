import React from "react";

import { DoctorCard, SectionName } from "../../../components";
import { DoctorImg } from "../../../img";

import "./DoctorSection.css";

const DoctorSection = () => (
    <section className="doctor-section">
        <div className="doctor-section--container">
            <SectionName sectionName="Nuestros Médicos"/>
            <h3 className="doctor-section--main-text">
                Los mejores médicos en células madres
            </h3>
            <div className="doctor-section--card-container">
                <DoctorCard
                    img={DoctorImg}
                    name="Dr. César Felipe Ploneda Valencia"
                    spec="Especialidad"
                />
                <DoctorCard
                    img={DoctorImg}
                    name="Dr. César Felipe Ploneda Valencia"
                    spec="Especialidad"
                />
                <DoctorCard
                    img={DoctorImg}
                    name="Dr. César Felipe Ploneda Valencia"
                    spec="Especialidad"
                />
            </div>
        </div>
    </section>
);

export default DoctorSection;
