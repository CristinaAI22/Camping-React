import React from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import "../../App.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img 
        src="/logo.png" 
        alt="Camping Logo" 
        className={styles.logo} 
      />
      <h1 className={styles.headerTitle}>
        Bine ai venit la Camping "Gradina cu flori"
      </h1>

      <Navbar />
    </header>
  );
};

export default Header;
