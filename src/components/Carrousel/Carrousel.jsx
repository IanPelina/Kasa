import React from "react";
import Img from '../../assets/accueil.png'

export default function Carrousel() {

    return(

        <div className="apartment" key="">
            <div className="apartment__img">
                <img src={Img} alt="" />                
            </div>
        </div>

    )
}