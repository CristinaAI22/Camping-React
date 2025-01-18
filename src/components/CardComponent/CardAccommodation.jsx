import React from "react";

function CardAccommodation({ image, title, description, features }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-4 w-80">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mt-2">{description}</p>

        {/* Features */}
        {features && (
          <div className="flex flex-wrap gap-2 mt-4">
            {features.map((feature, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CardAccommodation;
