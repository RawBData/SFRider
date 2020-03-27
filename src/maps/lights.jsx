import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "../App.css";

const icon = new Icon({
  iconUrl: require("../images/lights.png"),
  iconSize: [25, 30]
});

export default function CrimeMap({lights}) {
  const [activeLight, setActiveLight] = React.useState(null);
  console.log(lights);
  return (
          <div>
            
      
            <div>
            <Map center={[37.773943, -122.449484]} zoom={13.4}>
    
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
    
              {lights.map(light => (
                <Marker
                  key={light.objectid}
                  position={[
                    light.point.coordinates[1],
                    light.point.coordinates[0]
                  ]}
                  onClick={() => {
                    {/* console.log("marker opened") */}
                    setActiveLight(light);
                  }}
                  icon={icon}
                />
              ))}
    
              {activeLight && (
                <Popup
                  position={[
                    activeLight.point.coordinates[1],
                    activeLight.point.coordinates[0]
                  ]}
                  onClose={() => {
                    {/* console.log("marker closed") */}

                    setActiveLight(null);
                  }}
                >
                  <div>
                    <h2>Corner of {activeLight.street1} and {activeLight.street2}</h2>
                  </div>
                </Popup>
              )}
            </Map>
      
            </div>
      
          </div>
        );
                
      }