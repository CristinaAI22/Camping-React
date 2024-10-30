import React from "react";
import styles from './Header.module.css';
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
    <header className="header">
        <h1 className="header-title">Bine ai venit la Camping "Gradina cu flori"</h1>
        <nav className="header-nav">
            <div className="logo"></div>
            <ul className="navbar">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>

    </header>
    )
}

export default Header;