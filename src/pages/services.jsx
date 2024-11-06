import React from "react";
import CardActivities from "../components/CardActivities/CardActivities"; // Correct import
import bicycleImage from "../Assets/ActivitiesPhotos/bicycles.jpg"; // Correct image path

const Services = () => {
  return (
    <div>
      <h1>Ce oferim?!</h1>
      
      {/* Pass the image, title, and description as props */}
      <CardActivities
        image={bicycleImage} 
        title="Plimbări cu bicicletele"
        description="Oferim spre închiriere biciclete electrice."
      />
    </div>
  );
};

export default Services;
