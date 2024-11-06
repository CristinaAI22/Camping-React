import React from "react";
import CardActivities from "../components/CardActivities/CardActivities";
import { Grid2, Typography } from "@mui/material"; // Import Typography for styling
import bicycleImage from "../Assets/ActivitiesPhotos/bicycles.jpg";
import foodImage from "../Assets/ActivitiesPhotos/food.jpg";
import landscapeImage from "../Assets/ActivitiesPhotos/mountainlandscape1.jpg";
import kayakImage from "../Assets/ActivitiesPhotos/kayak.jpg";
import horsebackImage from "../Assets/ActivitiesPhotos/horsebackriding.jpg";
import festivalImage from "../Assets/ActivitiesPhotos/festival.jpg";

const Services = () => {
  return (
    <div>
      {/* Heading */}
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: "bold", marginTop: 4 }}>
        Cum să îți petreci timpul liber la Brezoi?!
      </Typography>

      {/* Grid Layout */}
      <Grid2 container spacing={4} justifyContent="center">
        <Grid2 item xs={12} sm={6} md={4}>
          <CardActivities
            image={bicycleImage}
            title="Plimbări cu bicicletele"
            description="Oferim spre închiriere biciclete electrice."
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <CardActivities
            image={foodImage}
            title="Mâncare delicioasă și sănătoasă"
            description="Punctul gastronomic local ”Casa Coziei” oferă mâncare gustoasă într-un loc autentic, condus de o gazdă bună și primitoare."
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <CardActivities
            image={landscapeImage}
            title="Descoperă natura încântătoare"
            description="Oferim ghidaj și îndrumare curioșilor și dornicilor de aventură."
          />
        </Grid2>

        <Grid2 item xs={12} sm={6} md={4}>
          <CardActivities
            image={kayakImage}
            title="Plimbări cu caiacul"
            description="Cunoaștem locurile și te putem lua alături de noi, să descoperim din caiac frumosul lac Brădișor."
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <CardActivities
            image={horsebackImage}
            title="Echitație în natură"
            description="Nedeea Vâlceană organizează excursii cu caii prin pădurile, dealurile și munții din zona Văii Călineștiului."
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <CardActivities
            image={festivalImage}
            title="Muzică live la Brezoi"
            description="Dacă este vară, atunci la Summer Camp Brezoi se organizează concerte de muzică bună și foarte bună, iar dacă este iulie, aici are loc grozavul Open Air Blues Festival."
          />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Services;
