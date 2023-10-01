import React from "react";
import { useState } from "react";
import AccordionLogo from '../../assets/accordion-logo.png'

export default function Accordion({ title, description }) {

    const [active, setActive] = useState(false);

    const toggle = () => {setActive(!active);};

    const content =
    Array.isArray(description) === true ? (
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      description
    );
 
    return (
      <div className={`accordion ${active ? "fall" : ""}`}>
        <div className="accordion__title" key={Accordion.id} onClick={toggle}>
          {title}<img className={`accordion__icon ${active ? "rotate" : ""}`} src={AccordionLogo} alt="arrow" />
        </div>
        <div className={`accordion__content ${active ? "accordion-show" : ""}`}>
          {content}
        </div>
      </div>
    )
}