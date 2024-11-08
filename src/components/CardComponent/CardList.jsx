// src/components/CardComponent/CardList.jsx
import React from "react";
import { Grid } from "@mui/material";
import CardActivities from "./CardActivities"; // Import CardActivities

const CardList = ({ cards }) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardActivities
            image={card.image}
            title={card.title}
            description={card.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
