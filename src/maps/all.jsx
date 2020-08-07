import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Map,
  Marker,
  Popup,
  Rectangle,
  Polyline,
  TileLayer,
} from "react-leaflet"
import { Icon } from 'leaflet'
import HeatmapLayer from "react-leaflet-heatmap-layer";
const { BaseLayer, Overlay } = LayersControl;


const center = [37.773943, -122.449484];
//Creating icon
const rackIcon = new Icon({
  iconUrl: require("../images/racks_icon.png"),
  iconSize: [30, 30]
});

const crimeIcon = new Icon({
  iconUrl: require("../images/crime.png"),
  iconSize: [35, 35]
});

export default function RacksMap({racks,routes,traffic,crime}) {
  const [activeRack, setActiveRack] = React.useState(null);
  console.log(racks)
  return (
          <div>
            
      
            <div>
            
            <Map center={center} zoom={13}>
              <LayersControl position="topright" collapsed={false}>
                <BaseLayer checked name="Color">
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </BaseLayer>
                <BaseLayer name="Black and White">
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                  />
                </BaseLayer>

                <Overlay checked name="Routes">
                  <LayerGroup>

                    {routes.paths.map(path=>(   
                      <FeatureGroup key={path.cnn + (Math.floor(Math.random()*10000)*Math.floor(Math.random()*10000))} color="green">
                        <Popup>Bicycle paths (Class I) are off-street paved bikeways. They are separated from vehicle traffic, but are almost always shared with pedestrians</Popup>
                        <Polyline opacity={.35} color="lime" positions={path.shape.coordinates} />
                      </FeatureGroup>
                    ))}
                    
                    {routes.lanes.map(path=>(   
                      <FeatureGroup key={path.cnn + (Math.floor(Math.random() *10000)*Math.floor(Math.random()*10000) )} color="orange">
                        <Popup>A standard bike lane (Class II) is a portion of road reserved for the preferential or exclusive use of people biking, indicated by road markings.</Popup>
                        <Polyline opacity={.35} color="orange" positions={path.shape.coordinates} />
                      </FeatureGroup>
                    ))}
                    
                    {routes.routes.map(path=>(   
                      <FeatureGroup key={path.cnn + (Math.floor(Math.random() *10000)*Math.floor(Math.random()*10000) )} color="purple">
                        <Popup>Shared lanes (Class III - sharrows) are typically wide travel lanes shared by bicyclists and vehicles.</Popup>
                        <Polyline opacity={.35} color="purple" positions={path.shape.coordinates} />
                      </FeatureGroup>
                    ))}

                    {routes.seperated.map(path=>(   
                      <FeatureGroup key={path.cnn + (Math.floor(Math.random() *10000) )} color="blue">
                        <Popup>Separated bikeways (Class IV), also commonly referred to as cycle tracks or protected bikeways, are bicycle facilities that are separated from traffic by parked cars, safe-hit posts, transit islands or other physical barriers.</Popup>
                        <Polyline opacity={.35} positions={path.shape.coordinates} />
                      </FeatureGroup>
                    ))}

                  </LayerGroup>
                </Overlay>

                <Overlay checked name="Racks">
                  <LayerGroup>
                      {racks.filter(rk=>parseInt(rk.spaces)>2).map( rk => (
                        <FeatureGroup>
                          <Popup>
                            <div>
                              <h2>Spaces : {rk.spaces}</h2>
                              <h2>Year Installed : {rk.install_yr}</h2>
                              <h2>Street : {rk.street}</h2>
                            </div>
                          </Popup>

                          <Marker
                            key={rk.objectid}
                            position={[
                              rk.point.latitude,
                              rk.point.longitude
                            ]}
                            icon={rackIcon}
                          />
                        </FeatureGroup>
                      ))}
                  </LayerGroup>
                </Overlay>

                <Overlay name="Traffic">
                  <LayerGroup>
                    <HeatmapLayer
                      opacity={.1}
                      points={traffic}
                      maxZoom={10}
                      longitudeExtractor={p => p.point.coordinates[0]}
                      latitudeExtractor={p => p.point.coordinates[1]}
                      intensityExtractor={p => parseFloat(p.yr2015_pm)} 
                    />
                  </LayerGroup>
                </Overlay>

                <Overlay name="Crime">
                  <LayerGroup>
                    {crime.map(event => (
                      <FeatureGroup>
                        <Popup>
                          <div>
                            <h2>Police District : {event.police_district}</h2>
                            <h2>Description : {event.incident_description}</h2>
                            <h2>Resolution : {event.resolution}</h2>
                          </div>
                        </Popup>
                        <Marker
                          key={event.incident_id+event.incident_number + (Math.floor(Math.random() *1000) )}
                          position={[
                            event.latitude,
                            event.longitude
                          ]}
                          icon={crimeIcon}
                        />
                      </FeatureGroup>  
                    ))}
        
                  </LayerGroup>
                </Overlay>

              </LayersControl>
            </Map>
      
            </div>
      
          </div>
        );
                
      }