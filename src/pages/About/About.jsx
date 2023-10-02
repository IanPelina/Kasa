import React from "react";
import Banner from "../../components/Banner/Banner";
import Img from "../../assets/apropos.png";
import Accordions from "../../components/Accordion/Accordions";
import AccordionData from '../../data/accordion.json';

export default function Apropos() {
    return(
        <div className="about-container"> 
            <div>
                <Banner>
                    <img className='banner__img about-img' src={Img} alt="paysage" />
                </Banner>
            </div>
            <div className="accordions">
                {AccordionData.map((Accordion) => (
                    <Accordions
                        key={Accordion.id}
                        title={Accordion.title}
                        description={Accordion.description}
                    />
                ))}
            </div>
        </div>
    )
}