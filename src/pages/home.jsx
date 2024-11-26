import React from "react";
import NavigationButton from "../components/NavigationButton";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <NavigationButton
          to="/accommodation"
          label="Detalii despre cazare"
          className="custom-class"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Home;
