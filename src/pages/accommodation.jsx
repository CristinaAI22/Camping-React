import React from "react";
import { Typography } from "@mui/material";
import CardAccommodation from "../components/CardComponent/CardAccommodation";

// Import images
import tentImage from "../Assets/ServicesPhotos/align-tents.jpg";
import toiletsImage from "../Assets/ServicesPhotos/toilets.jpg";
import tentsCarsImage from "../Assets/ServicesPhotos/tent-cars.jpg";
import kitchenImage from "../Assets/ServicesPhotos/kitchen.jpg";
import motorsImage from "../Assets/ServicesPhotos/motors.jpg";
import showersImage from "../Assets/ServicesPhotos/showers.jpg";
import bbqImage from "../Assets/ServicesPhotos/bbqArea.jpg";
import hamakImage from "../Assets/ServicesPhotos/hamaks2.jpg";
import campersImage from "../Assets/ServicesPhotos/campers.jpg";
import NavigationButton from "../components/NavigationButton";

const Accommodation = () => {
  // Array of card data for accommodations (Tents, Campers, etc.)
  const accommodationData = [
    {
      image: tentImage,
      title: "Camping pentru corturi",
      description: "Enjoy the beauty of nature with our tent camping.",
      features: ["toilet", "shower", "kitchen", "camping"],
    },
    {
      image: tentsCarsImage,
      title: "Corturi pe Mașini (Tents on Cars)",
      description:
        "Perfect for adventurous campers who want to stay above ground!",
      features: ["shower", "kitchen", "camping"],
    },
    {
      image: motorsImage,
      title: "Motociclete",
      description: "Îi găzduim cu drag pe cei care vin cu motoarele.",
      features: ["toilet", "shower", "mirrors", "hot water"],
    },
    {
      image: campersImage,
      title: "Rulote",
      description:
        "Avem o capacitate de a primi 10 rulote, cu acces la toate facilitățile campingului.",
      features: ["toilet", "shower", "mirrors", "hot water"],
    },
  ];

  // Array of card data for facilities (Showers, Kitchen, BBQ, etc.)
  const facilitiesData = [
    {
      image: showersImage,
      title: "Dușuri simple și curate",
      description:
        "Încălzim apa cu ajutorul panourilor solare și vă rugăm să folosiți cu grijă, să ajungă pentru toți.",
      features: ["shower"], // Facilities icons
    },
    {
      image: bbqImage,
      title: "Vatră de foc și grătar",
      description:
        "Vă punem la dispoziție grătarul, tuciul, discul, puteți folosi și vatra de foc, vă rugăm însă să fiți atenți cu focul.",
      features: ["bbq"], // Facilities icons
    },
    {
      image: kitchenImage,
      title: "Bucătăria de vară! ",
      description:
        "Bucătăria are frigidere, chiuvete, plită cu inducție/aragaz, câteva tacâmuri și vase. Folosiți-le cu încredere.",
      features: ["kitchen"], // Facilities icons
    },
    {
      image: toiletsImage,
      title: "Toaletele",
      description: "Toalete minimaliste, curate.",
      features: ["toilet"], // Facilities icons
    },
    {
      image: hamakImage,
      title: "Hamace",
      description: "Relaxați-vă în campingul nostru livadă.",
      features: ["toilet"], // Facilities icons
    },
    // Add more facilities data as needed
  ];

  return (
    <div>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          fontSize: "var(--font-size-h1)",
          fontFamily: "var(--font-primary)",
          color: "var(--primary-color)",
          fontWeight: "bold",
          marginTop: 4,
        }}
      >
        Despre acest camping!
      </Typography>

      {/* Accommodation Section */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", marginTop: 2 }}
      >
        Cazare
      </Typography>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {accommodationData.map((accommodation, index) => (
          <CardAccommodation
            key={index}
            image={accommodation.image}
            title={accommodation.title}
            description={accommodation.description}
            features={accommodation.features}
          />
        ))}
      </div>

      {/* Facilities Section */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", marginTop: 4 }}
      >
        Facilități
      </Typography>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {facilitiesData.map((facility, index) => (
          <CardAccommodation
            key={index}
            image={facility.image}
            title={facility.title}
            description={facility.description}
            features={facility.features}
          />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <NavigationButton
          to="/services"
          label="Idei de activități"
          className= "button-primary"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <NavigationButton
          to="/contact"
          label="Contactați-ne"
          className="button-primary"
        />
      </div>
    </div>
  );
};

export default Accommodation;
