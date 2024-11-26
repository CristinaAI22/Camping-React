import React from "react";
import "./ScrollToTopButton.css"; // Make sure the CSS file is properly imported

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleScrollToTop} className="scroll-to-top-button">
      Scroll to Top
    </button>
  );
};

export default ScrollToTopButton;
