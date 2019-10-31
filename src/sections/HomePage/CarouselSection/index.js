import React from "react";
import Slide from "react-reveal/Slide";

import {
    Carousel,
    CarouselItem,
} from "../../../components";
import {
    CarouselImg,
} from "../../../img";

import "./CarouselSection.css";

const CarouselSection = () => (
    <section className="carousel-section">
        <Carousel defaultWait={5000} maxTurns={0}>
            <Slide right={true}>
                <CarouselItem
                    img={CarouselImg}
                    title="Certificación del Consejo Mundial de Células Madre"
                    text="Lorem ipsum dolor amet kale chips portland master
                        cleanse flannel enamel pin, heirloom polaroid health goth
                        neutra. Williamsburg before they sold out health goth, put
                        a bird on it post-ironic hell of tumblr 90's kombucha live-edge four dollar toast."
                />
            </Slide>
            <Slide right={true}>
                <CarouselItem
                    img={CarouselImg}
                    title="Certificación del Consejo Mundial de Células Madre"
                    text="Lorem ipsum dolor amet kale chips portland master
                        cleanse flannel enamel pin, heirloom polaroid health goth
                        neutra. Williamsburg before they sold out health goth, put
                        a bird on it post-ironic hell of tumblr 90's kombucha live-edge four dollar toast."
                />
            </Slide>
            <Slide right={true}>
                <CarouselItem
                    img={CarouselImg}
                    title="Certificación del Consejo Mundial de Células Madre"
                    text="Lorem ipsum dolor amet kale chips portland master
                        cleanse flannel enamel pin, heirloom polaroid health goth
                        neutra. Williamsburg before they sold out health goth, put
                        a bird on it post-ironic hell of tumblr 90's kombucha live-edge four dollar toast."
                />
            </Slide>
        </Carousel>
    </section>
);

export default CarouselSection;
