import React from "react";
import { Link } from "react-router-dom";
import LetterK from '../../assets/k.png'
import KasaLogo from '../../assets/maison.png'
import PorteLogo from '../../assets/porte.png'
import LetterS from '../../assets/s.png'
import LetterA from '../../assets/a.png'

export default function Navbar() {
    return(
        <nav>
            <div>
                <img src={LetterK} alt="lettre K" />
                <img className="logo" src={KasaLogo} alt="logo kasa" />
                <img className="portelogo" src={PorteLogo} alt="logo porte" />
                <img className="logo" src={LetterS} alt="lettre s" />
                <img className="logo" src={LetterA} alt="lettre a" />
            </div>
            <div className="navlinks">
                <Link to="/" >Accueil</Link>
                <Link to="/apropos" >A propos</Link>
            </div>
        </nav>
    )
}