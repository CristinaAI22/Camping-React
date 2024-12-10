import React, { useState, useRef, useEffect, useCallback } from "react";
import { IconButton } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <nav className={styles.navbar}>
      <IconButton
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className={styles.hamburgerIcon}
      >
        {isMenuOpen ? <Close /> : <Menu />}
      </IconButton>

      <ul
        ref={menuRef}
        className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}
      >
        <li className={styles.navLink}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
        </li>
        <li className={styles.navLink}>
          <a href="#accommodations" onClick={() => setIsMenuOpen(false)}>
            Accommodation
          </a>
        </li>
        <li className={styles.navLink}>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
        </li>
        <li className={styles.navLink}>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
