import React from "react";
import Img from "../../assets/accueil.png";

export default function Banner() {

    return (
        <div className="banner">
            <img className='home-img' src={Img} alt="paysage" />
            <div>
                <p className="tagline" >Chez vous, partout et ailleurs</p>
            </div>
        </div>
    )
}