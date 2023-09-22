import React from "react";
import Banner from "../../components/Banner/Banner";
import Img from "../../assets/accueil.png";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    return(
        <div>
            <Banner>
                <div className="banner">
                    <img className='banner__img' src={Img} alt="paysage" />
                    <div>
                        <p className="banner__tagline" >Chez vous, partout et ailleurs</p>
                    </div>
                </div>
            </Banner>
            <Cards />
            <Footer />
        </div>
    )
}