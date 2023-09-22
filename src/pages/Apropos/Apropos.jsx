import React from "react";
import Banner from "../../components/Banner/Banner";
import Img from "../../assets/apropos.png";
import Accordions from "../../components/Accordion/Accordions";
import AccordionData from '../../data/accordion.json';
import Footer from "../../components/Footer/Footer";

export default function Apropos() {
    return(
        <div> 
            <div>
                <Banner>
                    <div className="banner">
                        <img className='banner__img' src={Img} alt="paysage" />
                    </div>
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
            <Footer />
        </div>
    )
}