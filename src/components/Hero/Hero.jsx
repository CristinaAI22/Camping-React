import React from "react";
import "./Hero.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../Assets/hero carusel poze/hero-1.jpg";
import image2 from "../../Assets/hero carusel poze/hero-2.jpg";
import image3 from "../../Assets/hero carusel poze/hero-3.jpg";
import image4 from "../../Assets/hero carusel poze/hero-4.jpeg";
import image5 from "../../Assets/hero carusel poze/hero-5.jpg";
import image6 from "../../Assets/hero carusel poze/hero-6.jpg";

export const Hero = () => {
  return (
    <section className="hero-section">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        transitionTime={600}
      >
        {[image1, image2, image3, image4, image5, image6].map(
          (imgSrc, index) => (
            <div key={index}>
              <img src={imgSrc} alt={`Camping ${index + 1}`} />
            </div>
          )
        )}
      </Carousel>
      <div className="hero-overlay">
        <h1>Discover the Great Outdoors</h1>
        <p>Experience nature like never before</p>
      </div>
    </section>
  );
};
