import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";

import logements from "../../data/logements.json"

import Carrousel from "../../components/Carrousel/Carrousel";
import Details from "../../components/Details/Details";

export default function Housing() {
  const navigate = useNavigate();
  const { id } = useParams();
  // useMemo va calculer la valeur de logement, à chaque fois que la valeur de sa dépendance change. Ici, sa dépendance est id.
  const logement = useMemo(() => {
    // Retourne la valeur calculée de logement, uniquement si id change.
    return logements.find((logement) => logement.id === id);
  }, [id]);

  // useEffect se lance uniquement lorsque la valeur de sa dépendance change. Ici, sa dépendance est logement.
  useEffect(() => {
    if (!logement) {
      return navigate("/404");
    }
  }, [logement]);

  if (!logement) { return null; }

  return (
    <div className="housing">
        <Carrousel pictures={logement.pictures} />
        <Details logement={logement}  />
        <div className="housing-accordions">
          <Collapse title="Description" description={logement.description} />
          <Collapse title="Équipements" description={logement.equipments} />
        </div>
    </div>
  );

}