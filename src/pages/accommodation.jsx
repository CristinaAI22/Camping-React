import React from "react";
import { Typography } from "@mui/material";
import CardAccommodation from "../components/CardComponent/CardAccommodation";

import tentImage from "../Assets/ServicesPhotos/align-tents.jpg";
import toiletsImage from "../Assets/ServicesPhotos/toilets.jpg";
import kitchenImage from "../Assets/ServicesPhotos/kitchen.jpg";
import tentsCarsImage from "../Assets/ServicesPhotos/tent-cars.jpg";

const Accommodation = () => {
  // Array of card data for accommodations
  const accommodationData = [
    {
      image: tentImage,
      title: "Tent Camping",
      description: "",
      features: ["toilet", "shower", "kitchen", "camping"],
    },
    {
      image: tentsCarsImage ,
      title: "Corturi pe mașini",
      description: ".",
      features: ["toilet", "shower", "kitchen", "camping"],
    },
    {
      image:  toiletsImage ,
      title: "Toalete",
      description:
        "Grajdiul bunicului a devenit spațiu pentru toalete și dușuri.",
      features: ["toilet", "shower", "mirrors", "hot water"],
    },
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
      {/* Render accommodation cards */}
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
    </div>
  );
};

export default Accommodation;
