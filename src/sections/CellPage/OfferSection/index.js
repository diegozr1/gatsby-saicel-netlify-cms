import React from "react";

import { Button } from "../../../components";

import { OfferImgLeft, OfferImgRight } from "../../../img";

import "./OfferSection.css";

const OfferSection = () => (
    <section className="offer-section">
        <div className="offer-section--container">
            <div className="offer-section--left-side">
                <h3 className="offer-section--main-text">
                    ¿De dónde se obtienen las células madre?
                </h3>
                <img src={OfferImgLeft} alt="offer-img-left" className="offer-section--img-left"/>
                <div className="offer-section--bottom">
                    <p className="offer-section--description">
                        Las obtenemos principalmente de tejidos como cordón umbilical, placenta y tejido
                        endometrial (con procedimientos quirúrgicos, no caseros). Se tiene mejores resultados
                        utilizando éstos tejidos bajo evidencia científica.
                    </p>
                    <Button link="/our-lab">Nuestro Laboratorio</Button>
                </div>
            </div>
            <div className="offer-section--right-side">
                <img src={OfferImgRight} alt="offer-img-right" className="offer-section--img-right"/>
                <p className="offer-section--text-right">
                    También podemos, si así lo desea el paciente, cultivar células
                    autólogas, como grasa corporal o dientes de leche.
                </p>
            </div>
        </div>
    </section>
);

export default OfferSection;
