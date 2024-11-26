import React from "react";
import "./ScrollToTopButton.css"; 

const ScrollToTopButton = ({ label, style, className }) => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // This scrolls the page to the top
  };

  return (
    <button
      onClick={handleScrollToTop}
      style={style}
      className={`button-scroll-to-top ${className}`}
    >
      {label}
    </button>
  );
};

export default ScrollToTopButton;
