import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "../App.css";


export default function CrimeMap({crime}) {
  const [activeCrime, setActiveCrime] = React.useState(null);
  console.log(crime);
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
                  key={event.incident_number}
                  position={[
                    event.latitude,
                    event.longitude
                  ]}
                  onClick={() => {
                    {/* console.log("marker opened") */}
                    setActiveCrime(event);
                  }}
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