import React from "react";
import { Map, Marker, Popup, TileLayer, Circle, MapControl } from "react-leaflet";
import { Icon } from "leaflet";
import "../App.css";
import Legend from './legend';


export default function RacksMap({traffic}) {
  const [activeTraffic, setActiveTraffic] = React.useState(null);
  return (
          <div>
            
      
            <div>
            <Map center={[37.773943, -122.449484]} zoom={13.4}>
    
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />

              <Legend />
    
              {traffic.map(event => (
                <Circle
                  fillColor={ 
                    event.model6_vol > 700000 ? "purple" : 
                    event.model6_vol > 500000 ? "red" :
                    event.model6_vol > 300000 ? "gold" :
                    "green"
                    }
                  radius={200} 
                  fillOpacity={.4}
                  stroke={false}
                  key={event.objectid}
                  center={[
                    event.point.coordinates[1],
                    event.point.coordinates[0]
                  ]}
                  onClick={() => {
                    {/* console.log("marker opened") */}
                    setActiveTraffic(event);
                  }}
                />
              ))}

              
              
            </Map>
      
            </div>
      
          </div>
        );
                
      }