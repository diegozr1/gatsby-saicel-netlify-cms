import React from "react";

import { Button } from "../../../components";
import {
    HomeScroll,
} from "../../../img";

import "./HomeSection.css";

const HomeSection = () => (
    <>
        <div className="home-section--background" />
        <section className="home-section">
            <div className="home-title--container">
                <h1 className="home-title--main-text"> Cambiando la forma de hacer medicina </h1>
                <p className="home-title--description">
                    Trabajamos para cambiar el paradigma de medicar, a regenerar a las personas.
                </p>
                <div className="home-title--button-group">
                    <Button type="primary" link="/celulas-madre"> Todo sobre celulas madre </Button>
                    <Button link="/our-lab"> Nuestro laboratorio </Button>
                </div>
            </div>
            <div className="home-section--icon-container">
                <a href="#cells" className="home-section--icon">
                    <img className="home-section--scroll" src={HomeScroll} alt="home-scroller"/>
                </a>
            </div>
        </section>
    </>
);

export default HomeSection;
