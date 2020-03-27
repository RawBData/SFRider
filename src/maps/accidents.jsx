import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "../App.css";


export default function RacksMap({accidents}) {
  const [activeAccident, setActiveAccident] = React.useState(null);
  console.log(accidents)
  return (
          <div>
            
      
            <div>
            <Map center={[37.773943, -122.449484]} zoom={13.4}>
    
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
    
              {accidents.map(event => (
                <Marker
                  key={event.on_scene_dttm}
                  position={[
                    event.location.latitude,
                    event.location.longitude
                  ]}
                  onClick={() => {
                    {/* console.log("marker opened") */}
                    setActiveAccident(event);
                  }}
                />
              ))}
    
              {activeAccident && (
                <Popup
                  position={[
                    activeAccident.location.latitude,
                    activeAccident.location.longitude
                  ]}
                  onClose={() => {
                    {/* console.log("marker closed") */}

                    setActiveAccident(null);
                  }}
                >
                  <div>
                    <h2>Type : {activeAccident.call_type}</h2>
                    <h2>Seriousness : {activeAccident.call_type_group}</h2>
                    <h2>Neighborhood : {activeAccident.neighborhoods_analysis_boundaries}</h2>
    
                  </div>
                </Popup>
              )}
              
            </Map>
      
            </div>
      
          </div>
        );
                
      }