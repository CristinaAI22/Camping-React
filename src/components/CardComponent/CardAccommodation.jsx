import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";

function CardAccommodation({ image, title, description, features }) {
  return (
    <Card className="card-root">
      <CardMedia
        component="img"
        height="200"
        image={image} // Ensure this is a string path, not an object
        alt={title}
        className="card-media"
      />
      <CardContent className="card-content">
        <Typography className="card-title" gutterBottom>
          {title}
        </Typography>
        <Typography className="card-description" variant="body2" color="text.secondary">
          {description}
        </Typography>
        <div className="card-features">
          {/* Render features here */}
        </div>
      </CardContent>
      <CardActions>
        <Button className="card-action-button" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardAccommodation;