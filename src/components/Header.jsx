import React from "react"
import unicornlogo from "../assets/logo.png"

const Header = () => {
    
    return (
        <header>
            <nav>
                <a href="index.html">
                    <img src={unicornlogo} alt="logo"/><h2 class="title">Code Icons</h2>
                </a>
                <ul className="athlete">
                    <li className="sport">
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    )   
}

export default Header