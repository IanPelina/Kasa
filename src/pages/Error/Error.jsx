import React from "react";
import ErrorLogo from '../../assets/404.png';
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="error-page">
            <div className="error-logo">
                <img src={ErrorLogo} alt="error"/>
            </div>
            <div className="error-and-link">
                <p className="error-msg">Oups! La page que vous demandez n'existe pas.</p>
                <Link className="home-link" to="/">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}