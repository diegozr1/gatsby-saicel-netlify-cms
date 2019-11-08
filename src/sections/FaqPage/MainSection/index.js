import React from "react";

import { SectionName } from "../../../components";
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

import "./MainSection.css";

const MainSection = () => (
    
    <section className="main-section">
        <div className="row">
            <div className="column-left">                
                <SectionName sectionName="Preguntas Frecuentes (FAQ)" />                
                <p class="left-question">
                    ¿Tienes más preguntas?
                </p>                
                <div class="card">
                    <img src="https://www.benlcollins.com/wp-content/uploads/2016/01/quora.png" width="50%"></img>
                    <div class="container">
                        <b className="ask-card"> Pregúntanos algo en Quora </b>                        
                    </div>
                </div> 
            </div>
            <div className="column-right">
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
    <p style={{ padding: '28px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  );

export default MainSection;
