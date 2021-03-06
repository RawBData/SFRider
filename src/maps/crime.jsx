import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "../App.css";

const icon = new Icon({
  iconUrl: require("../images/crime.png"),
  iconSize: [35, 35]
});

export default function CrimeMap({crime}) {
  const [activeCrime, setActiveCrime] = React.useState(null);
  return (
          <div>
            
      
            <div>
              <Map center={[37.773943, -122.449484]} zoom={13.4}>
      
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
      
                {crime.map(event => (
                  <Marker
                    key={event.incident_id+event.incident_number + (Math.floor(Math.random() *1000) )}
                    position={[
                      event.latitude,
                      event.longitude
                    ]}
                    onClick={() => {
                      {/* console.log("marker opened") */}
                      setActiveCrime(event);
                    }}
                    icon={icon}
                  />
                ))}
      
                {activeCrime && (
                  <Popup
                    position={[
                      activeCrime.latitude,
                      activeCrime.longitude
                    ]}
                    onClose={() => {
                      {/* console.log("marker closed") */}

                      setActiveCrime(null);
                    }}
                  >
                    <div>
                      <h2>Police District : {activeCrime.police_district}</h2>
                      <h2>Description : {activeCrime.incident_description}</h2>
                      <h2>Resolution : {activeCrime.resolution}</h2>
      
                    </div>
                  </Popup>
                )}
              </Map>
      
            </div>
      
          </div>
        );
                
      }