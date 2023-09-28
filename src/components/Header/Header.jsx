import React from "react";
import Logo from "../../assets/kasa-logo.svg"
import {NavLink} from "react-router-dom";

export default function Header() {

    return(
        <header className="header-container">
            <nav>
                <img src={Logo} alt="kasa-logo" />
                <div className="navlinks">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/apropos" className="about">A Propos</NavLink>
                </div>
            </nav>
        </header>
    )
}