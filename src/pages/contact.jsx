import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Map from "../components/Map/Map";
import Weather from "../components/Weather/Weather"; 
// import NavigationButton from "../components/NavigationButton";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Contact = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Main Heading */}
      <Typography
        variant="h3"
        component="h1"
        align="center"
        sx={{
          fontSize: "var(--font-size-h1)",
          fontFamily: "var(--font-primary)",
          color: "var(--primary-color)",
          fontWeight: "bold",
          marginBottom: 4,
        }}
      >
        Contactați-ne!
      </Typography>

      {/* Contact Information Section */}
      <Box
        sx={{
          backgroundColor: "var(--light-gray)",
          padding: 4,
          borderRadius: 2,
          marginBottom: 4,
        }}
      >
        <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
          Informații utile
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              <strong>Telefon:</strong> +4 0730701781
              <br></br>
              <strong>Telefon:</strong> +4 0752223869
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              <strong>Email:</strong> contact@campingsite.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              <strong>Adresă:</strong> Aleea Carmen Sylva nr 12, Brezoi, Vâlcea
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Map Section */}
      <div style={{ marginTop: "40px" }}>
        <Typography variant="h5" align="center" sx={{ marginBottom: "20px" }}>
          Vă așteptăm cu drag!
        </Typography>
        <div style={{ width: "100%", height: "300px", margin: "0 auto" }}>
          <Map /> {/* This will display your map */}
        </div>
      </div>

      {/* Weather Section */}
      <div style={{ marginTop: "40px" }}>
        <Typography variant="h5" align="center" sx={{ marginBottom: "20px" }}>
          Vremea la Brezoi
        </Typography>
        <Weather /> {/* This will display the weather information */}
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <ScrollToTopButton />
      </div>
    </div>
    
  );
};

export default Contact;
