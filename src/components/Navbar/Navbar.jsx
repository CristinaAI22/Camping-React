import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";  // Import the CSS Module

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      {/* Hamburger icon */}
      <IconButton className={styles.hamburgerIcon} onClick={toggleMenu}>
        {isMenuOpen ? <Close /> : <Menu />}
      </IconButton>

      {/* Navbar links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/accommodation">Accommodation</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
