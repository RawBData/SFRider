import React from "react";
import { Map, Marker, Popup, TileLayer, Circle, MapControl } from "react-leaflet";
import { Icon } from "leaflet";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import "../App.css";
import Legend from './legend';


export default function RacksMap({traffic}) {
  const [activeTraffic, setActiveTraffic] = React.useState(null);
  //console.log("traffic",traffic);
  return (
          <div>
            
      
            <div>
            <Map center={[37.773943, -122.449484]} maxZoom={14} zoom={13.4}>
    
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />

              <Legend />

              <HeatmapLayer
                opacity={.1}
                points={traffic}
                maxZoom={10}
                longitudeExtractor={p => p.shape.coordinates[0]}
                latitudeExtractor={p => p.shape.coordinates[1]}
                intensityExtractor={p => parseFloat(p.yr2015_pm)} 
              />
              
            </Map>
      
            </div>
      
          </div>
        );
                
      }