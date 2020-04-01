import React from "react";
import { Map, Marker, Popup, TileLayer, Circle, MapControl } from "react-leaflet";
import { Icon } from "leaflet";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import "../App.css";
import Legend from './legend';


export default function RacksMap({traffic}) {
  const [activeTraffic, setActiveTraffic] = React.useState(null);
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
                points={traffic}
                maxZoom={10}
                longitudeExtractor={p => p.point.coordinates[0]}
                latitudeExtractor={p => p.point.coordinates[1]}
                intensityExtractor={p => parseFloat(p.model6_vol)} 
              />
              
            </Map>
      
            </div>
      
          </div>
        );
                
      }