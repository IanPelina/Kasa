import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/kasa-logo.svg"

export default function Navbar() {
    return(
        <nav>
            <img src={Logo} alt="kasa-logo" />
            <div className="navlinks">
                <Link to="/" >Accueil</Link>
                <Link to="/apropos" >A propos</Link>
            </div>
        </nav>
    )
}