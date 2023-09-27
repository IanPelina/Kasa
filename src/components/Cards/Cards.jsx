import React from "react";
import Logements from "../../data/logements.json"
import Card from "../Card/Card";

export default function Cards() {

    return (
      <div className="cards">
          {Logements.map( logement => <Card logement={logement} key={logement.id} />)}
      </div>
    )
}