import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">Follow us on social media</p>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100083178489940"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF className="icon" />
        </a>
        <a
          href="https://www.instagram.com/camping.gradina.cu.flori/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;