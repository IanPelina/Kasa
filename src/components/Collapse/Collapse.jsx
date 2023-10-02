import React from "react";
import { useState } from "react";
import AccordionLogo from '../../assets/accordion-logo.png'

export default function Collapse({ title, description }) {

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
      <div className={`housing-accordion ${active ? "housing-fall" : ""}`}>
        <div className="housing-accordion__title">
          {title}<img onClick={toggle} className={`accordion__icon ${active ? "rotate" : ""}`} src={AccordionLogo} alt="arrow" />
        </div>
        <div className={`housing-accordion__content ${active ? "show" : ""}`}>
          {content}
        </div>
      </div>
    )
}