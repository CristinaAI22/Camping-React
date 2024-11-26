import React from "react";
import { Typography } from "@mui/material";
import CardList from "../components/CardComponent/CardList"; // Import the CardList component

import bicycleImage from "../Assets/ActivitiesPhotos/bicycles.jpg";
import foodImage from "../Assets/ActivitiesPhotos/food.jpg";
import landscapeImage from "../Assets/ActivitiesPhotos/mountainlandscape1.jpg";
import kayakImage from "../Assets/ActivitiesPhotos/kayak.jpg";
import horsebackImage from "../Assets/ActivitiesPhotos/horsebackriding.jpg";
import festivalImage from "../Assets/ActivitiesPhotos/festival.jpg";
import monasteryImage from "../Assets/ActivitiesPhotos/monasteries.jpg";
import waterImage from "../Assets/ActivitiesPhotos/thermals.jpg";
import NavigationButton from "../components/NavigationButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
const Services = () => {
  const cardData = [
    {
      image: bicycleImage,
      title: "Plimbări cu bicicletele",
      description: "Oferim spre închiriere biciclete electrice.",
    },
    {
      image: foodImage,
      title: "Mâncare delicioasă și sănătoasă",
      description:
        'Punctul gastronomic local "Casa Coziei" oferă mâncare gustoasă într-un loc autentic, condus de o gazdă bună și primitoare.',
    },
    {
      image: landscapeImage,
      title: "Descoperă natura încântătoare",
      description:
        "Oferim ghidaj și îndrumare curioșilor și dornicilor de aventură.",
    },
    {
      image: kayakImage,
      title: "Plimbări cu caiacul",
      description:
        "Cunoaștem locurile și te putem lua alături de noi, să descoperim din caiac frumosul lac Brădișor.",
    },
    {
      image: horsebackImage,
      title: "Echitație în natură",
      description:
        "Nedeea Vâlceană organizează excursii cu caii prin pădurile, dealurile și munții din zona Văii Călineștiului.",
    },
    {
      image: festivalImage,
      title: "Muzică live la Brezoi",
      description:
        "Dacă este vară, atunci la Summer Camp Brezoi se organizează concerte de muzică bună și foarte bună, iar dacă este iulie, aici are loc grozavul Open Air Blues Festival.",
    },
    {
      image: monasteryImage,
      title: "Mănăstirile din nordul Vâlcii",
      description:
        "Poți face un tur cultural pe la unele dintre cele mai frumoase mănăstiri din zonă, suficient de aproape de Brezoi încât să poată fi vizitate într-o singură zi: Cozia, Berislăvești, Turnu, Stânișoara, Cornet.",
    },
    {
      image: waterImage,
      title: "Băile termale de la Călimănești-Căciulata",
      description:
        "Bogăția pământului, apele termale de la Călimănești-Căciulata sunt aproape de noi.",
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
        Activități. Ce poți să faci la Brezoi?
      </Typography>
      {/* Use the CardList component to render the cards */}
      <CardList cards={cardData} />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <NavigationButton
          to="/accommodation"
          label="Detalii despre cazare"
          className="button-primary"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <NavigationButton
          to="/contact"
          label="Contactați-ne"
          className="button-primary"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Services;
