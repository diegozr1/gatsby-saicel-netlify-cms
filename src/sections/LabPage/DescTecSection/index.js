import React from "react";

import { CountCard } from "../../../components";

import { DescTecImgLeft, DescTecImgRight } from "../../../img";

import "./DescTecSection.css";

const DescTecSection = () => (
    <section className="study-section">
        <div className="study-section--container">
            <div className="study-section--left-side">
                <img src={DescTecImgLeft} alt="study-img-left" className="study-section--img-left"/>
                <p className="study-section--text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
                <CountCard className="desc-tec--counter" counter={755} title="Pruebas de laboratorio" range="2018" />
            </div>
            <div className="study-section--right-side">
                <h3 className="study-section--main-text sixty-five">
                    Descripción de nuestra tecnología
                </h3>
                <img src={DescTecImgRight} alt="study-img-right" className="study-section--img-right"/>
                <p className="study-section--description sixty-five">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    </section>
);

export default DescTecSection;
