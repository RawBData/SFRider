import React from "react";
import { Map, Marker, Popup, TileLayer, FeatureGroup, LayerGroup, LayersControl } from "react-leaflet";
import { Icon } from "leaflet";
import "../App.css";
import RacksLegend from './racksLegend';

const { BaseLayer, Overlay } = LayersControl;

const icon = new Icon({
  iconUrl: require("../images/racks_icon.png"),
  iconSize: [30, 30]
});

const center = [37.773943, -122.449484]

export default function RacksMap({racks}) {
  const [activeRack, setActiveRack] = React.useState(null);
  //console.log(racks)
  return (
      <div>

        <div> 
        <Map center={[37.773943, -122.449484]} zoom={13.4}> 
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />    

            <LayersControl position="topright" collapsed={false}>
                
                <BaseLayer name="2015-Present">
                  <LayerGroup>
                      {racks.filter(rk=>parseInt(rk.install_yr)>2014).map( rk => (
                        <Marker
                          key={rk.objectid}
                          position={[
                            rk.shape.coordinates[1],
                            rk.shape.coordinates[0],
                          ]}
                          onClick={() => {
                            {/* console.log("marker opened") */}
                            setActiveRack(rk);
                          }}
                          icon={icon}
                        />
                      ))}
                  </LayerGroup>
                </BaseLayer>

                <BaseLayer name="2010-2014">
                  <LayerGroup>
                      {racks.filter(rk=>parseInt(rk.install_yr)>2009 && parseInt(rk.install_yr)<2015).map( rk => (
                        <Marker
                          key={rk.objectid}
                          position={[
                            rk.shape.coordinates[1],
                            rk.shape.coordinates[0],
                          ]}
                          onClick={() => {
                            {/* console.log("marker opened") */}
                            setActiveRack(rk);
                          }}
                          icon={icon}
                        />
                      ))}
                  </LayerGroup>
                </BaseLayer>

                <BaseLayer checked name="2005-2009">
                  <LayerGroup>
                      {racks.filter(rk=>parseInt(rk.install_yr)>2004 && parseInt(rk.install_yr)<2010).map( rk => (
                        <Marker
                          key={rk.objectid}
                          position={[
                            rk.shape.coordinates[1],
                            rk.shape.coordinates[0],
                          ]}
                          onClick={() => {
                            {/* console.log("marker opened") */}
                            setActiveRack(rk);
                          }}
                          icon={icon}
                        />
                      ))}
                  </LayerGroup>
                </BaseLayer>

                <BaseLayer name="Pre-2005">
                  <LayerGroup>
                      {racks.filter(rk=>parseInt(rk.install_yr)<2005).map( rk => (
                        <Marker
                          key={rk.objectid}
                          position={[
                            rk.shape.coordinates[1],
                            rk.shape.coordinates[0],
                          ]}
                          onClick={() => {
                            {/* console.log("marker opened") */}
                            setActiveRack(rk);
                          }}
                          icon={icon}
                        />
                      ))}
                  </LayerGroup>
                </BaseLayer>

                <BaseLayer name="All">
                  <LayerGroup>
                      {racks.map( rk => (
                        <Marker
                          key={rk.objectid}
                          position={[
                            rk.shape.coordinates[1],
                            rk.shape.coordinates[0],
                          ]}
                          onClick={() => {
                            {/* console.log("marker opened") */}
                            setActiveRack(rk);
                          }}
                          icon={icon}
                        />
                      ))}
                  </LayerGroup>
                </BaseLayer>
                
            </LayersControl>


            {activeRack && (
                  <Popup
                    position={[
                      activeRack.shape.coordinates[1],
                      activeRack.shape.coordinates[0],
                    ]}
                    onClose={() => {
                      {/* console.log("marker closed") */}

                      setActiveRack(null);
                    }}
                  >
                    <div>
                      <h2>Spaces : {activeRack.spaces}</h2>
                      <h2>Year Installed : {activeRack.install_yr}</h2>
                      <h2>Street : {activeRack.street}</h2>
                    </div>
                  </Popup>
            )}
          </Map>
        </div>
  
      </div>
  );
}