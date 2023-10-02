import React from "react";
import full from "../../assets/full.png";
import empty from "../../assets/empty.png";


export default function Details({logement}) {

    return (
        <div className="apartment__infos">
            <div className="apartment__description">
                <h1>{logement.title}</h1> 
                <p>{logement.location}</p>
                <div className="apartment__tags">
                    {logement.tags.map((tag, index) => <div className="apartment__tag" key={index}>{tag}</div>)}
                </div>
            </div>
            <div className="apartment__user">
                <div className="text-and-pics">
                    <div className="text">
                        <p>{logement.host.name}</p>
                        <p>{logement.host.surname}</p>
                    </div>
                    <div className="pics">
                        <img alt="img" src={logement.host.picture} />
                    </div>
                </div>
                <div className="rating">
                    { [...Array(Number(logement.rating))].map((_, i) => <div className="star" key={`full_${i}`}><img alt="img" src={full}/></div> )}
                    { [...Array(5 - Number(logement.rating))].map((_, i) => <div className="star" key={`empty_${i}`}><img alt="img" src={empty}/></div> )}
                </div>
            </div>
        </div>
    )
}