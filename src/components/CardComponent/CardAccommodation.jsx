// src/components/CardComponent/CardAccommodation.jsx
import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { GiCampingTent, GiHammock, GiBarbecue, GiCookingPot } from "react-icons/gi";
import { FaCaravan, FaToilet, FaShower, FaWifi } from "react-icons/fa";

const CardAccommodation = ({ image, title, description, amenities }) => {
  return (
    <Card>
      <CardMedia component="img" image={image} alt={title} height="140" />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" paragraph>
          {description}
        </Typography>

        <Grid container spacing={1}>
          {amenities.includes("tent") && (
            <Grid item>
              <GiCampingTent title="Tent Area" />
            </Grid>
          )}
          {amenities.includes("camper") && (
            <Grid item>
              <FaCaravan title="Camper Area" />
            </Grid>
          )}
          {amenities.includes("toilet") && (
            <Grid item>
              <FaToilet title="Toilet" />
            </Grid>
          )}
          {amenities.includes("shower") && (
            <Grid item>
              <FaShower title="Shower" />
            </Grid>
          )}
          {amenities.includes("wifi") && (
            <Grid item>
              <FaWifi title="Wi-Fi" />
            </Grid>
          )}
          {amenities.includes("grill") && (
            <Grid item>
              <GiBarbecue title="Grill" />
            </Grid>
          )}
          {amenities.includes("kitchen") && (
            <Grid item>
              <GiCookingPot title="Kitchen" />
            </Grid>
          )}
          {amenities.includes("hammock") && (
            <Grid item>
              <GiHammock title="Hammock" />
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardAccommodation;
