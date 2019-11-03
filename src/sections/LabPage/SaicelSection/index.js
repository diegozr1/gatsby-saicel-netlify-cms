import React from "react";

import { Bullet } from "../../../components";
import {
    SaicelImgLeft,
    SaicelImgRight,
    ValueImg1,
    ValueImg2,
    ValueImg3,
} from "../../../img";

import "./SaicelSection.css";

const SaicelSection = () => (
    <section className="offer-section">
        <div className="offer-section--container">
            <div className="offer-section--left-side">
                <h3 className="offer-section--main-text">
                    ¿Qué hay detrás de Sáicel?
                </h3>
                <img src={SaicelImgLeft} alt="offer-img-left" className="offer-section--img-left"/>
                <div className="offer-section--bottom sixty-five">
                    <p className="offer-section--description">
                        El nombre esta inspirado en la palabara Japonesa
                        Saisei (再生) que significa <strong> rebirth, regeneration, regrowth, revitalization.</strong>
                        <br />
                        Es un proyecto que tiene 3 años, nace del sueño y la convicción de hacer medicina
                        de una forma diferente a la actual, mediante:
                    </p>
                </div>
            </div>
            <div className="offer-section--right-side">
                <img src={SaicelImgRight} alt="offer-img-right" className="offer-section--img-right"/>
            </div>
        </div>
        <div className="saicel-section--bullet-container">
            <Bullet
                icon={ValueImg1}
                description="Sabemos que terapia celular va a cambiar el
                rumbo de las enfermedades y queremos ser parte de ello"
            />
            <Bullet
                icon={ValueImg2}
                description="Sentimos un profundo amor por México y queremos contribuir a su desarrollo"
            />
            <Bullet
                icon={ValueImg3}
                description="Sentimos un profundo amor por México y queremos contribuir a su desarrollo"
            />
        </div>
    </section>
);

export default SaicelSection;
