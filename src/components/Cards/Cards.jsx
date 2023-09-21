import React from "react";
import Logements from "../../data/logements.json"

export default function Cards() {

    return (
        <div className="cards">
            {Logements.map( logement => {
                return(
                    <div className="card" key={logement.id}>
                        <img src={logement.cover} alt="image logement" />                
                        <p>{logement.title}</p> 
                    </div>
                )
            })}
        </div>
    )
}