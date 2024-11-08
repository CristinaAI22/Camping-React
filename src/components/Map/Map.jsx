import React from "react";
import "./Map.css";

export const Map = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.1997768913916!2d24.217700676135248!3d45.34477937107215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d1b5df6327c1b%3A0x5ee3c0bb80e202e6!2zQ2FtcGluZyDigJ1HcsSDZGluYSBjdSBmbG9yaeKAnQ!5e0!3m2!1sen!2sro!4v1731063904609!5m2!1sen!2sro";
  return (
    <div className="map-container">
      <iframe title="Map" src={mapSrc} allowFullScreen loading="lazy"></iframe>
    </div>
  );
};
export default Map;
