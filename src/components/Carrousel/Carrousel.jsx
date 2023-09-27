import React, { useState } from "react";
import left from '../../assets/left.png';
import right from '../../assets/right.png';

export default function Carrousel({pictures}) {

    const [currentPicture, setCurrentPicture] = useState(0);

    const getClassName = (i) => {
        if (i === currentPicture) return "show";
        return "";
    };

    const nextSlide = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    };

    const previousSlide = () => {
        const newCurrentPicture = currentPicture - 1;
            if (newCurrentPicture < 0) {
            setCurrentPicture(pictures.length - 1)
            return
        };

        setCurrentPicture(currentPicture - 1);
    }

    return(
        
        <div className="apartment__img">
            <div className="arrows">
                <img className="show arrow left" src={left} onClick={previousSlide}/>
                <img className="show arrow right" src={right} onClick={nextSlide}/>
            </div>
            {pictures.map((picture, i) => (
                <img key={picture} src={picture} className={getClassName(i)}></img>
            ))}
        </div>

    )
}