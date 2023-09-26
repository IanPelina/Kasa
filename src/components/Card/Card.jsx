import React from "react";
import Logements from "../../data/logements.json"
import { Link } from "react-router-dom";

export default function Card() {
    return(
        <div className="cards">
            {Logements.map( logement => {
                return(
                    <Link to="/logements/:id" className="card" key={logement.id}>
                        <img src={logement.cover} alt={logement.cover} />                
                        <h3>{logement.title}</h3> 
                    </Link>
                )
            })}
        </div>
    )
}