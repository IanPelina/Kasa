import React from "react";
import FontAwesomeIcon from ;

export default function Details() {

    return (
        <div className="apartment__infos">
            <div>
                <h1>Cozy loft on the Canal Saint-Martin</h1> 
                <p>Paris, île de France</p>
                <div className="apartment__tags">
                    <div className="apartment__tag">Cozy</div>
                    <div className="apartment__tag">Canal</div>
                    <div className="apartment__tag">Paris 10</div>
                </div>
            </div>
            <div className="apartment__user">
                <div className="text-and-pics">
                    <div className="text">
                        <p>Alexandre</p> 
                        <p>Dumas</p>
                    </div>
                    <div className="pics"></div>
                </div>
                <div className="rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                </div>
            </div>
        </div>
    )
}