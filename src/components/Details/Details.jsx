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
                    {logement.tags.map(tag => <div className="apartment__tag">{tag}</div>)}
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
                    { Array(Number(logement.rating)).fill(<div className="star"><img alt="img" src={full}/></div>) }
                    { Array(5- Number(logement.rating)).fill(<div className="star"><img alt="img" src={empty}/></div>) }
                </div>
            </div>
        </div>
    )
}