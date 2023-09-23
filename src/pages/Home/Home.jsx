import React from "react";
import Banner from "../../components/Banner/Banner";
import Img from "../../assets/accueil.png";
import Cards from "../../components/Cards/Cards";

export default function Home() {
    return(
        <div>
            <Banner>
                <img className='banner__img' src={Img} alt="paysage" />
                <p className="banner__tagline" >Chez vous, partout et ailleurs</p>
            </Banner>
            <Cards />
        </div>
    )
}