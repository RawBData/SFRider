import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";


export default function App() {

  // SF Coordinates
  // latitude:37.773943,
  // longitude:-122.449484,

  return (
    <Map center={[37.773943, -122.449484]} zoom={13.4}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}