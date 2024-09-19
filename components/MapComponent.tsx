// components/MapComponent.tsx
import React from 'react';

// Replace these with your company's coordinates
const companyCoordinates = {
  lat: 34.04744,  // Example: Latitude for San Francisco
  lng: -118.28797 // Example: Longitude for San Francisco
};

const MapComponent: React.FC = () => {
  return (
    <iframe
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${companyCoordinates.lng - 0.01},${companyCoordinates.lat - 0.01},${companyCoordinates.lng + 0.01},${companyCoordinates.lat + 0.01}&layer=mapnik&marker=${companyCoordinates.lat},${companyCoordinates.lng}`}
      width="100%"
      height="400"
      style={{ border: 0 }}
      title="Map of Company Location"
    />
  );
};

export default MapComponent;
