import React from "react";
import { Map, Marker, Popup, TileLayer,  } from "react-leaflet";
import { Icon } from "leaflet";
import "../App.css";
import RacksLegend from './racksLegend';

const icon = new Icon({
  iconUrl: require("../images/lock.png"),
  iconSize: [30, 30]
});

export default function RacksMap({racks}) {
  const [activeRack, setActiveRack] = React.useState(null);
  // let Deezracks = racks;
  return (
          <div>
            
            <div>
              
            <Map center={[37.773943, -122.449484]} zoom={13.4}>
              
              <RacksLegend markers={racks.map(rack=>(rack))}/>
              
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              
              
            </Map>
      
            </div>
      
          </div>
        );
                
      }