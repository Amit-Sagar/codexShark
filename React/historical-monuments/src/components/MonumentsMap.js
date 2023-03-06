import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MonumentsMap = ({ monumentLong, monumentName }) => {
  return (
    <div className="w-[40%] px-5">
      <MapContainer center={monumentLong} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={monumentLong}>
          <Popup>{monumentName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MonumentsMap;
