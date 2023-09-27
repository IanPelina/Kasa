import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/kasa-logo.svg"

export default function Navbar() {
    return(
        <header className="header-container">
            <nav>
                <img src={Logo} alt="kasa-logo" />
                <div className="navlinks">
                    <Link to="/" >Accueil</Link>
                    <Link className="about" to="/apropos" >A propos</Link>
                </div>
            </nav>
        </header>
    )
}