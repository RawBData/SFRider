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

//Focus on GG Park
let center = [37.768850, -122.485990];
// const center = [37.768850, -122.481883];

const rackIcon = new Icon({
  iconUrl: require("../images/racks_icon.png"),
  iconSize: [30, 30]
});

const crimeIcon = new Icon({
  iconUrl: require("../images/crime.png"),
  iconSize: [35, 35]
});

const poiIcon = new Icon({
  iconUrl: require("../images/poi.png"),
  iconSize: [35, 35]
});

export default function RacksMap({racks,routes,traffic,crime}) {
  const [activeRack, setActiveRack] = React.useState(null);

  //adding specific points of interest by hand
  const pointsOfInterest=[{
    name:"Conservatory of Flowers",
    lon:37.7717577,
    lat:-122.4717941
  },{
    name:"De Young Museum",
    lon:37.771317,
    lat:-122.468709 
  },{
    name:"Academy of Science",
    lon:37.7701666,
    lat:-122.4692006
  },{
    name:"Botanical Garden",
    lon:37.7675161,
    lat:-122.4696875
  },{
    name:"Stow Lake Boathouse / Water / Restrooms",
    lon:37.7707741,
    lat:-122.4776102
  },{
    name:"Portals of the Past",
    lon:37.770858,
    lat:-122.4828262
  },{
    name:"Bisons",
    lon:37.769635, 
    lat:-122.498065
  },{
    name:"Dutch Windmill",
    lon:37.770456,
    lat:-122.509555
  },{
    name:"Polo Field With Cycling Track",
    lon:37.768337,
    lat:-122.492269
  },{
    name:"Strawberry Hill",
    lon:37.768597,
    lat:-122.475353
  }]
  return (
          <div>
            
      
            <div>
            
            <Map center={center} zoom={14.5}>
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
                        <Polyline opacity={.35} weight={6} color="lime" positions={path.shape.coordinates} />
                      </FeatureGroup>
                    ))}
                    
                    {routes.lanes.map(path=>(   
                      <FeatureGroup key={path.cnn + (Math.floor(Math.random() *10000)*Math.floor(Math.random()*10000) )} color="orange">
                        <Popup>A standard bike lane (Class II) is a portion of road reserved for the preferential or exclusive use of people biking, indicated by road markings.</Popup>
                        <Polyline opacity={.35} weight={6} color="orange" positions={path.shape.coordinates} />
                      </FeatureGroup>
                    ))}
                    
                    {routes.routes.map(path=>(   
                      <FeatureGroup key={path.cnn + (Math.floor(Math.random() *10000)*Math.floor(Math.random()*10000) )} color="purple">
                        <Popup>Shared lanes (Class III - sharrows) are typically wide travel lanes shared by bicyclists and vehicles.</Popup>
                        <Polyline opacity={.35} weight={6} color="purple" positions={path.shape.coordinates} />
                      </FeatureGroup>
                    ))}

                    {routes.seperated.map(path=>(   
                      <FeatureGroup key={path.cnn + (Math.floor(Math.random() *10000) )} color="blue">
                        <Popup>Separated bikeways (Class IV), also commonly referred to as cycle tracks or protected bikeways, are bicycle facilities that are separated from traffic by parked cars, safe-hit posts, transit islands or other physical barriers.</Popup>
                        <Polyline opacity={.35} weight={6} positions={path.shape.coordinates} />
                      </FeatureGroup>
                    ))}

                  </LayerGroup>
                </Overlay>

                <Overlay checked name="Racks">
                  <LayerGroup>
                      {racks.map( rk => (
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
                              rk.lat,
                              rk.lon
                            ]}
                            icon={rackIcon}
                          />
                        </FeatureGroup>
                      ))}
                  </LayerGroup>
                </Overlay>

                <Overlay checked name="Traffic">
                  <LayerGroup>
                    <HeatmapLayer
                      opacity={.1}
                      points={traffic}
                      maxZoom={10}
                      longitudeExtractor={p => p.point.coordinates[0]}
                      latitudeExtractor={p => p.point.coordinates[1]}
                      intensityExtractor={p => parseFloat(p.model6_vol)} 
                    />
                  </LayerGroup>
                </Overlay>

                <Overlay checked name="Crime">
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

                <Overlay checked name="Points of Interest">
                  <LayerGroup>
                    {pointsOfInterest.map(place => (
                      <FeatureGroup>
                        <Popup>
                          <div>
                            <h2>Name : {place.name}</h2>
                          </div>
                        </Popup>
                        <Marker
                          key={"key"+(Math.floor(Math.random() *1000) )}
                          position={[
                            place.lon,
                            place.lat
                          ]}
                          icon={poiIcon}
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