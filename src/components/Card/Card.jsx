import React from "react";
import { Link } from "react-router-dom";

export default function Card({ logement }) {

  return (
    <Link to={`/logements/${logement.id}`} className="card">
      <img src={logement.cover} alt={logement.cover} />
      <h3>{logement.title}</h3>
    </Link>
  );
}