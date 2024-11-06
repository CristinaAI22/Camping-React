import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";

function CardActivities({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}  // Use the image passed as a prop
        alt={title}    // Use the title for alt text
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}  {/* Display the title passed in as a prop */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}  {/* Display the description passed in as a prop */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardActivities;
