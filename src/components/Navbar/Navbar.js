import React, { useState, useRef, useEffect, useCallback } from "react";
import { IconButton } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = useCallback((event) => {
    if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]); // Add isMenuOpen as a dependency

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]); // Add handleClickOutside to the dependency array

  return (
    <nav className={styles.navbar}>
      <IconButton onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <Close /> : <Menu />}
      </IconButton>
      <ul ref={menuRef} className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li className={styles.navLink}>Home</li>
        <li className={styles.navLink}>About</li>
        <li className={styles.navLink}>Services</li>
        <li className={styles.navLink}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
