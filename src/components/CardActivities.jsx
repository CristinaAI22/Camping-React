import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";
import "../App.css";  // Correct import for App.css from the components folder

function CardActivities({ image, title, description }) {
  return (
    <Card className="card-root">
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        className="card-media" // Apply class for rounded corners
      />
      <CardContent className="card-content">
        <Typography className="card-title" gutterBottom>
          {title}
        </Typography>
        <Typography className="card-description" variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="card-action-button" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardActivities;
