import React from "react";
import Banner from "../../components/Banner/Banner";
import Img from "../../assets/accueil.png";
import Cards from "../../components/Cards/Cards";

export default function Home() {
    return(
        <div>
            <Banner>
                <div className="banner-container">
                    <img className='banner__img' src={Img} alt="paysage" />
                    <p className="banner__tagline" >Chez vous, partout et ailleurs</p>
                </div>
            </Banner>
            <div className="cards-container">
                <Cards />
            </div>
        </div>
    )
}