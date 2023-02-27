import React from "react"
import { Link } from "react-router-dom";
import unicornlogo from "../assets/logo.png"

const Header = () => {
    
    return (
        <header>
            <nav>
                <a href="index.html">
                    <img src={unicornlogo} alt="logo"/><h2 className="title">Athletes</h2>
                </a>
                <ul className="athlete">
                    <li className="sport">
                        <a href="/NewAthlete">New Athlete</a>
                    </li>
                </ul>
            </nav>
        </header>
    )   
}

export default Header