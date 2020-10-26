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
  Viewport
} from "react-leaflet"
import { Icon } from 'leaflet'
import HeatmapLayer from "react-leaflet-heatmap-layer";
const { BaseLayer, Overlay } = LayersControl;

/*Focus on GG Park
// let center = [37.768850, -122.485990];
// const center = [37.768850, -122.481883];
//presidio
// newCetner = [37.796711, -122.463787]
*/

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
  }//presidio
  ,{
    name:"Baker Beach",
    lon:37.793469,
    lat:-122.484008
  },{
    name:"Golden Gate Bridge",
    lon:37.807756,
    lat:-122.474770
  },{
    name:"Fort Point",
    lon:37.810519,
    lat:-122.476586
  },{
    name:"Walt Disney Museum",
    lon:37.801304,
    lat:-122.458492
  },{
    name:"Crissy Field",
    lon:37.804301,
    lat:-122.465436
  },{
    name:"Cafe RX",
    lon:37.800440,
    lat:-122.452095
  },{
    name:"Fort Point Brewing",
    lon:37.803262,
    lat:-122.464960
  },{
    name:"Battery Cranston",
    lon:37.806992,
    lat:-122.476647
  },{
    name:"Nike Missle Site",
    lon:37.791920,
    lat:-122.474626
  }
  //Embarcadero
  ,{
    name:"Oracle",
    lon:37.777341,
    lat:-122.390367
  },{
    name:"Bay Bridge Overpass",
    lon:37.788628,
    lat:-122.387820
  },{
    name:"Ferry Building",
    lon:37.795366,
    lat:-122.393788
  },{
    name:"Rincon Park/Giant Arrow",
    lon:37.791612,
    lat:-122.389657
  },{
    name:"Exploratorium",
    lon:37.801027,
    lat:-122.398914
  },{
    name:"Pier 39",
    lon:37.808472,
    lat:-122.409894
  },{
    name:"Fishermans Wharf",
    lon:37.807616,
    lat:-122.420830
  }
]

export default function RacksMap({racks,routes,traffic,crime}) {
  const [activeRack, setActiveRack] = React.useState(null);
  const [center, setCenter] = React.useState([37.768850, -122.485990]);
  const [viewPort, setViewport] = React.useState( {center: [37.768850, -122.485990] ,zoom: 14.5} );

 
  /*
  onload={()=>{setViewport( {center: [37.768850, -122.485990] ,zoom: 14.5} )}}
  onload={()=>{setViewport({center: [37.796711, -122.463787],zoom: 14.5} )}}

  */





 const changeViewPortCenter = (name)=>{
   switch (name) {
      case "GG Park":
        setViewport( {center: [37.768850, -122.485990], zoom: 14.5} )
      break;

      case "The Presidio":
        setViewport( {center: [37.80, -122.467], zoom: 14.5} )
      break;

      case "The Embarcadero":
        setViewport( {center: [37.794852, -122.393027], zoom: 14.5} )
      break;     
   
     default:
       break;
   }
 }
  
  return (
          <div>
            <div>    
            <Map 
              animate={true}
              viewport={viewPort}
              onbaselayerchange={(it)=>{changeViewPortCenter(it.name)}}
            >
            <TileLayer  
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              <LayersControl className="layerscontrol" position="topright" collapsed={false} >

                <BaseLayer checked name="GG Park" lon="test" lat="test">
                <LayerGroup>
                        <FeatureGroup>
                          <Popup>
                            <div>
                              <h2>Place : Golden Gate Park</h2>
                            </div>
                          </Popup>

                          <Marker
                            key={Math.random()}
                            position={[37.768850, -122.485990]}
                            icon={poiIcon}
                          />
                        </FeatureGroup>
                  </LayerGroup>
                </BaseLayer>

                <BaseLayer name="The Presidio" >
                    <LayerGroup>
                        <FeatureGroup>
                          <Popup>
                            <div>
                              <h2>Place : The Presidio</h2>
                            </div>
                          </Popup>

                          <Marker
                            key={Math.random()}
                            position={[37.796711, -122.463787]}
                            icon={poiIcon}
                          />
                        </FeatureGroup>
                  </LayerGroup>
                </BaseLayer>

                <BaseLayer name="The Embarcadero" >
                    <LayerGroup>
                        <FeatureGroup>
                          <Popup>
                            <div>
                              <h2>Place : The Embarcadero</h2>
                            </div>
                          </Popup>

                          <Marker
                            key={Math.random()}
                            position={[37.795883, -122.402943]}
                            icon={poiIcon}
                          />
                        </FeatureGroup>
                  </LayerGroup>
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
                      {racks.filter(rk=>parseInt(rk.install_yr)>2009).map( rk => (
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
                              rk.shape.coordinates[1],
                              rk.shape.coordinates[0],
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
                      longitudeExtractor={p => p.shape.coordinates[0]}
                      latitudeExtractor={p => p.shape.coordinates[1]}
                      intensityExtractor={p => parseFloat(p.yr2015_pm)} 
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