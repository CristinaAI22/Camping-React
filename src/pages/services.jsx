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
import ScrollToTopButton from "../components/ScrollToTopButton";

const Services = () => {
  const cardData = [
    {
      image: bicycleImage,
      title: "Plimbări cu bicicletele",
      description: "Oferim spre închiriere biciclete electrice.",
      details:
        "Experimentați peisaje fascinante și aventuri de neuitat călare pe biciclete mountain bike electrice de ultimă generație. Alăturați-vă nouă și îmbrățișați frumusețea naturii sustenabile! Discover Alpine Xplore for eco-friendly e-bike tours.",
      contact: {
        phone: "0745 833 567",
        address: "Carmen Sylva, nr 12, Brezoi, Vâlcea",
        emai: "cosminpetre93@gmail.com",
        facebook: "https://www.facebook.com/BikuOfficial",
        instagram: "https://www.instagram.com/alpinexplorebikes/",
      },
    },
    {
      image: foodImage,
      title: "Mâncare delicioasă și sănătoasă",
      description:
        'Punctul gastronomic local "Casa Coziei" oferă mâncare gustoasă într-un loc autentic, condus de o gazdă bună și primitoare.',
      details:
        "Se pot face rezervări pentru a lua mâncarea la pachet sau pentru a mânca direct la gazdă acasă. Oferim mâncare de cea mai bună calitate, făcută cu drag și pasiune. Specialitatea noastră sunt mâncărurile tradiționale locale.",
      contact: {
        phone: "0755509434",
        address: "sat Văratica, Brezoi, Vâlcea",
        email: "flvoursromania14@gmail.com",
        facebook:
          "https://www.facebook.com/people/Casa-Coziei/61560212213023/?_rdr",
        instagram: "https://www.instagram.com/casa.coziei/",
      },
    },
    {
      image: landscapeImage,
      title: "Descoperă natura încântătoare",
      description:
        "Oferim ghidaj și îndrumare curioșilor și dornicilor de aventură.",
      details:
        "Colaborăm cu ghizi locali, care cunosc și iubesc muntele, sunt oameni de încredere, calificați pentru asistență și îndrumare pe munte. De la Masivul Cozia, la Pietrele Doabrei, Dealul Proienilor și muntele Narățu, ghizii noștri pot să adapteze trasee pentru diferite categorii de experiență  și vârstă (iubim copiii) și să ofere experiențe foarte frumoase în natura splendidă care ne înconjoară. ",
      contact: {
        phone: "0730701781",
        email: "rares1ra@gmail.com",
      },
    },
    {
      image: kayakImage,
      title: "Plimbări cu caiacul",
      description:
        "Cunoaștem locurile și te putem lua alături de noi, să descoperim din caiac lacurile de Lotru și Olt.",
      details:
        "Împreună cu Alpine Xplore oferim plimbări ghidate, cu caiacele, pe râurile din zonă. Putem organiza tururi de câteva ore sau de zi, adaptate grupului și vremii, iar distracția, aventura și pofta de mâncare sunt garantate. ",
      contact: {
        phone: "0745 833 567",
        address: "Carmen Sylva, nr 12, Brezoi, Vâlcea",
        emai: "cosminpetre93@gmail.com",
      },
    },
    {
      image: horsebackImage,
      title: "Echitație în natură",
      description:
        "Nedeea Vâlceană organizează excursii cu caii prin pădurile, dealurile și munții din zona Văii Călineștiului.",
      details: "Nedeea Vâlceană organizează drumeții cu caii pe munte. Instruim iubitori de cai, indiferent de vârstă.Plimbările se fac în Munții Lotrului și în Țara Loviștei și durează între 1-7 zile. Se pot organiza și tabere de copii, tineri sau adulți.",
      contact: {
        phone: "0744 313 135",
        address: "Nedeea Valceana",
        email: "onica.m.alexandra@gmail.com",
        facebook: "https://www.facebook.com/nedeeavalceana",
        instagram: "https://www.instagram.com/nedeea_valceana/",
      },
    },
    {
      image: festivalImage,
      title: "Muzică live la Brezoi",
      description:
        "Dacă este vară, atunci la Summer Camp Brezoi se organizează concerte de muzică bună și foarte bună, iar dacă este iulie, aici are loc grozavul Open Air Blues Festival.",
      details: "",
      contact: {
        phone: "0761 312 655",
        address: "Strada Valea Satului , Brezoi, Romania",
        email: "abystageevents@gmail.com",
        facebook: "https://www.facebook.com/summercampbrezoi/?locale=ro_RO",
        instagram: "https://www.instagram.com/summercampbrezoi/",
        website: "iabilet.ro/bilete-summer-camp-brezoi-venue-4887",
      },
    },

    {
      image: monasteryImage,
      title: "Mănăstirile din nordul Vâlcii",
      description:
        "Poți face un tur cultural pe la unele dintre cele mai frumoase mănăstiri din zonă.",
      details:
        "Suficient de aproape de Brezoi încât să poată fi vizitate într-o singură zi: Cozia, Berislăvești, Turnu, Stânișoara, Cornet, aceste mănăstiri, unele foarte vechi, oferă prilejul de a admira arhitectura religioasă specifică evului mediu românesc, picturile deosbeite, dar și mediul natural foarte frumos în care toate sunt amplasate.",
      contact: {
        address: "",
      },
    },
    {
      image: waterImage,
      title: "Băile termale de la Călimănești-Căciulata",
      description:
        "Bogăția pământului, apele termale de la Călimănești-Căciulata sunt aproape de noi.",
      details:
        "La numai 15 km de Brezoi, se află vestita stațiune balneo-climaterică de pe Valea Oltului. Aici puteți opta pentru un număr mare de locații unde puteți înota și beneficia de alte proceduri conexe băilor termale.",
      contact: {
        address: '',
      },
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
        id="activities"
      >
        Activități. Ce poți să faci la Brezoi?
      </Typography>
      {/* Use the CardList component to render the cards */}
      <CardList cards={cardData} />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Services;
