import React from "react";
import { Typography } from "@mui/material";
import CardAccommodation from "../components/CardComponent/CardAccommodation";
import ScrollToTopButton from "../components/ScrollToTopButton";

// Import MUI Icons
import ShowerIcon from "@mui/icons-material/Shower";
import KitchenIcon from "@mui/icons-material/Kitchen";
import WcIcon from "@mui/icons-material/Wc";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

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

const Accommodation = () => {
  const accommodationData = [
    {
      image: tentImage,
      title: "Camping pentru corturi",
      description: "Enjoy the beauty of nature with our tent camping.",
      features: [
        <WcIcon key="toilet" />,
        <ShowerIcon key="shower" />,
        <KitchenIcon key="kitchen" />,
        <DirectionsCarIcon key="camping" />,
      ],
    },
    {
      image: tentsCarsImage,
      title: "Corturi pe Mașini (Tents on Cars)",
      description:
        "Perfect for adventurous campers who want to stay above ground!",
      features: [
        <ShowerIcon key="shower" />,
        <KitchenIcon key="kitchen" />,
        <DirectionsCarIcon key="camping" />,
        <WcIcon key="toilet"/>,
      ],
    },
    {
      image: motorsImage,
      title: "Motociclete",
      description: "Îi găzduim cu drag pe cei care vin cu motoarele.",
      features: [
        <WcIcon key="toilet" />,
        <ShowerIcon key="shower" />,
        <LocalFireDepartmentIcon key="hot water" />,
        <KitchenIcon key="kitchen" />,

      ],
    },
    {
      image: campersImage,
      title: "Rulote",
      description:
        "Avem o capacitate de a primi 10 rulote, cu acces la toate facilitățile campingului.",
      features: [
        <WcIcon key="toilet" />,
        <ShowerIcon key="shower" />,
        <LocalFireDepartmentIcon key="hot water" />,
        <KitchenIcon key="kitchen" />,

      ],
    },
  ];

  const facilitiesData = [
    {
      image: showersImage,
      title: "Dușuri simple și curate",
      description:
        "Încălzim apa cu ajutorul panourilor solare și vă rugăm să folosiți cu grijă, să ajungă pentru toți.",
      features: [<ShowerIcon key="shower" />],
    },
    {
      image: bbqImage,
      title: "Vatră de foc și grătar",
      description:
        "Vă punem la dispoziție grătarul, tuciul, discul, puteți folosi și vatra de foc, vă rugăm însă să fiți atenți cu focul.",
      features: [<LocalFireDepartmentIcon key="bbq" />],
    },
    {
      image: kitchenImage,
      title: "Bucătăria de vară!",
      description:
        "Bucătăria are frigidere, chiuvete, plită cu inducție/aragaz, câteva tacâmuri și vase. Folosiți-le cu încredere.",
      features: [<KitchenIcon key="kitchen" />],
    },
    {
      image: toiletsImage,
      title: "Toaletele",
      description: "Toalete minimaliste, curate.",
      features: [<WcIcon key="toilet" />],
    },
    {
      image: hamakImage,
      title: "Hamace",
      description: "Relaxați-vă în campingul nostru livadă.",
      features: [<WcIcon key="toilet" />],
    },
  ];

  return (
    <div className="px-4 py-8 bg-gray-50 dark:bg-gray-900">
      {/* Page Header */}
      <Typography
        variant="h3"
        component="h1"
        className="text-4xl font-bold text-primary text-center mt-8 mb-4 dark:text-gray-200"
      >
        Despre acest camping!
      </Typography>

      {/* Accommodation Section */}
      <Typography
        variant="h4"
        component="h2"
        className="text-2xl font-semibold text-center mt-6 dark:text-gray-300"
      >
        Cazare
      </Typography>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {accommodationData.map((accommodation, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <CardAccommodation
              image={accommodation.image}
              title={accommodation.title}
              description={accommodation.description}
              features={accommodation.features}
            />
          </div>
        ))}
      </div>

      {/* Facilities Section */}
      <Typography
        variant="h4"
        component="h2"
        className="text-2xl font-semibold text-center mt-12 dark:text-gray-300"
        id="accommodation"
      >
        Facilități
      </Typography>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {facilitiesData.map((facility, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <CardAccommodation
              image={facility.image}
              title={facility.title}
              description={facility.description}
              features={facility.features}
            />
          </div>
        ))}
      </div>

      {/* ScrollToTopButton */}
      <div className="text-center mt-10">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Accommodation;
