// src/components/Navbar/Navbar.js
import React from "react";
import styles from "./Navbar.module.css"; // Import the CSS module
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}> 
        <li className={styles.navLink}> 
          <a href="#home">Home</a>
        </li>
        <li className={styles.navLink}> 
          <a href="#activities">Activities</a>
        </li>
        <li className={styles.navLink}> 
          <a href="#gallery">Gallery</a>
        </li>
        <li className={styles.navLink}> 
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
