import React from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import "../../App.css";


import { ReactComponent as Logo } from "../../Assets/svg/Logo CGF.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Logo className="logo" width={150} height={150} />
      </div>

      <h1 className={styles.headerTitle}>
        Bine ai venit la Camping "Grădina cu flori"
      </h1>
      
      <Navbar />
    </header>
  );
};

export default Header;
