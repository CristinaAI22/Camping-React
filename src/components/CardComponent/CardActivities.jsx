import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";

function CardActivities({ image, title, description, details, contact }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <Typography
            variant="h6"
            className="text-xl font-bold text-gray-800 mb-2"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            className="text-gray-600 line-clamp-3"
          >
            {description}
          </Typography>
          <div className="mt-4">
            <Button
              onClick={handleOpen}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Implementation */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-2xl font-bold text-gray-800">
          {title}
        </DialogTitle>
        <DialogContent className="p-6 space-y-4">
          <Typography className="text-gray-700">{description}</Typography>
          <Typography className="text-sm text-gray-600 mt-2">{details}</Typography>
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg mt-4"
          />

          {/* Contact Section */}
          {contact && (
            <div className="mt-4 space-y-2">
              <Typography variant="h6" className="text-lg font-semibold">
                Contact Information
              </Typography>
              {contact.email && (
                <Typography className="text-gray-700">Email: {contact.email}</Typography>
              )}
              {contact.phone && (
                <Typography className="text-gray-700">Phone: {contact.phone}</Typography>
              )}
              {contact.website && (
                <Typography className="text-gray-700">
                  Website:{" "}
                  <a
                    href={contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {contact.website}
                  </a>
                </Typography>
              )}
              {contact.instagram && (
                <Typography className="text-gray-700">
                  Instagram:{" "}
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {contact.instagram}
                  </a>
                </Typography>
              )}
              {contact.facebook && (
                <Typography className="text-gray-700">
                  Facebook:{" "}
                  <a
                    href={contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {contact.facebook}
                  </a>
                </Typography>
              )}
            </div>
          )}
        </DialogContent>
        <Button
          onClick={handleClose}
          className="m-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          Close
        </Button>
      </Dialog>
    </>
  );
}

export default CardActivities;
