import React from "react";
import Fade from "react-reveal/Fade";

import {
    Card,
    SectionName,
} from "../../../components";

import {
    CardImage,
} from "../../../img";

const ProductSection = () => (
    <section className="press-section">
        <SectionName sectionName="Nuestros productos" />
        <div className="press-section--container">
            <h3 className="press-title--main-text">
                Conoce nuestra variedad en productos
            </h3>
            <div className="press-section--cards-container">
                <Fade right={true}>
                    <Card
                        img={CardImage}
                        link="/press"
                        title="Nombre del producto a dos lineas"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </Fade>
                <Fade right={true} delay={500}>
                    <Card
                        img={CardImage}
                        link="/press"
                        title="Nombre del producto a dos lineas"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </Fade>
                <Fade right={true} delay={1000}>
                    <Card
                        img={CardImage}
                        link="/press"
                        title="Nombre del producto a dos lineas"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </Fade>
            </div>
        </div>
    </section>
);

export default ProductSection;
