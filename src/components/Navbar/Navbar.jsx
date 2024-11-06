import React, { useState, useRef, useEffect, useCallback } from "react";
import { IconButton } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu open/close state
  const menuRef = useRef(null);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Close the menu if clicked outside
  const handleClickOutside = useCallback(
    (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close the menu when clicking outside
      }
    },
    [isMenuOpen] // Dependency: useEffect will be triggered when isMenuOpen changes
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Add event listener for clicks outside the menu
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener on component unmount
    };
  }, [handleClickOutside]); // Make sure handleClickOutside is updated when the state changes

  return (
    <nav className={styles.navbar}>
      {/* Hamburger menu icon for mobile */}
      <IconButton onClick={toggleMenu} aria-label="Toggle menu" className={styles.hamburgerIcon}>
        {isMenuOpen ? <Close /> : <Menu />} {/* Show Close icon when menu is open, otherwise Menu */}
      </IconButton>

      {/* Navigation links */}
      <ul
        ref={menuRef}
        className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`} // Add 'active' class when menu is open
      >
        <li className={styles.navLink}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/services">Services</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;