import React from "react";

import { SectionName } from "../../../components";
import { FAQIcon, QuoraRedIcon } from "../../../img";
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

import "./MainSection.css";

const MainSection = () => (
    <section className="main-section">
        <div className="row">
            <div className="column-left">                
                <SectionName sectionName="Preguntas Frecuentes (FAQ)" icon={FAQIcon} alt="faq-icon" />        
                <p className="left-question">
                    ¿Tienes más preguntas?
                </p>                
                <div className="faq-card">
                    <img className="faq-quora-img" src="https://www.benlcollins.com/wp-content/uploads/2016/01/quora.png" alt="quora-link" width="50%"></img>
                    <div className="faq-container">
                        <span className="ask-card"> Pregúntanos algo en Quora </span>
                        <button className="faq-quora-button">
                            <img className="faq-quora-icon" src={QuoraRedIcon} alt='quora-red-icon' />
                            <span className="faq-quora-text"> Síguenos </span>
                        </button>                  
                    </div>
                </div> 
            </div>
            <div className="column-right">
                <SectionName sectionName="Preguntas Frecuentes (FAQ)" icon={FAQIcon} alt="faq-icon" />
                <Accordion atomic={true}>
                    <AccordionItem title="¿Por qué Células Madres Mesenquimales?">
                        <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="¿Cómo es el protocolo de tratamiento?">
                        <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="¿Cómo son las dosis o viales?">
                        <DummyContent />
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);


const DummyContent = () => (
    <p className="faq-body">
        Las Células Madres Mesenquimales tienen la particular característica de ser una célula pluripotencial; es decir,
        que se puede diferenciar en casi cualquier célula que un cuerpo o tejido necesite (células musculares, vasculares,
        nerviosas, hematopoyéticas, óseas, etc.) <br />

        Las células madre Mesénquimales tienen algunas características principales: <br />
        <br />
        <strong>Histocompatibilidad:</strong> El cuerpo reconoce las células madre mesenquimales como parte del cuerpo evitando el rechazo. <br />
        <br />
        <strong>Inmunomodulación:</strong> En el caso de patologías autoinmunes, las células madre mesenquimales ayudan a regular el sistema inmune.
        Secretan citoquinas y receptores que son capaces de modificar el microambiente inmune del huésped. “mas técnico”
        (Su baja antigenicidad y la expresión de moléculas que interactúan específicamente con células activadas del sistema inmunológico
        permite que su utilización en enfermedades autoinmunes logren una respuesta de inmunomodulación, además, activan a poblaciones 
        residentes de linfocitos T reguladores que incrementan el efecto inmunomodulador) <br />
        <br />
        <strong>Regeneración:</strong> La célula madre mesenquimal es pluripotencial, lo cual significa que pueden convertirse en
        casi cualquier tejido del riñón, nervioso, músculo, hueso, cartílago, glándulas del páncreas, etc. <br />
    </p>
  );

export default MainSection;
