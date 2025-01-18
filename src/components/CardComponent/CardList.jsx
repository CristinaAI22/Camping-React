// src/components/CardComponent/CardList.jsx
import React from "react";
import { Grid2 } from "@mui/material";
import CardActivities from "./CardActivities"; // Import CardActivities

const CardList = ({ cards }) => {
  return (
    <Grid2 container spacing={4} justifyContent="center">
      {cards.map((card, index) => (
        <Grid2 item xs={12} sm={6} md={4} key={index}>
          <CardActivities
            image={card.image}
            title={card.title}
            description={card.description}
            details={card.details}
            contact={card.contact}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CardList;
