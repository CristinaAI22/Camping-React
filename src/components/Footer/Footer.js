import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer bg-light-gray">
      <p className="footer-text">Follow us on social media</p>
      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF className="icon" />
        </a>
        <a
          href="https://instagram.com"
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
