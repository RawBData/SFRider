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
const { BaseLayer, Overlay } = LayersControl

const center = [37.773943, -122.449484]
const rectangle = [
  [37.773943, -122.449484],
  [37.773943, -122.49],
]

const LightsIcon = new Icon({
  iconUrl: require("../images/lights.png"),
  iconSize: [30, 30]
});

export default function Routes({routes}) {
    const [activeLight, setActiveLight] = React.useState(null);





    // console.log(routes)
    return (
      <Map center={center} zoom={13}>
        <LayersControl position="topright" collapsed={false}>
          <BaseLayer name="Color">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer checked name="Black and White">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </BaseLayer>

          <Overlay name="Lights">
            <LayerGroup>
              {routes.lights.map(light => (
                  <Marker
                    key={light.objectid + (Math.floor(Math.random()*10000)*Math.floor(Math.random()*10000))}
                    position={[
                      light.point.coordinates[1],
                      light.point.coordinates[0]
                    ]}
                    onClick={() => {
                      {/* console.log("marker opened") */}
                      setActiveLight(light);
                    }}
                    icon={LightsIcon}
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
            </LayerGroup>
          </Overlay>

          <Overlay checked name="Paths">
            <LayerGroup>
              {routes.paths.map(path=>(   
              <FeatureGroup key={path.cnn + (Math.floor(Math.random()*10000)*Math.floor(Math.random()*10000))} color="green">
                <Popup>Bicycle paths (Class I) are off-street paved bikeways. They are separated from vehicle traffic, but are almost always shared with pedestrians</Popup>
                <Polyline color="lime" positions={path.shape.coordinates} />
              </FeatureGroup>
              ))}
            </LayerGroup>
          </Overlay>

          <Overlay checked name="Lanes">
          <LayerGroup>
              {routes.lanes.map(path=>(   
              <FeatureGroup key={path.cnn + (Math.floor(Math.random() *10000)*Math.floor(Math.random()*10000) )} color="orange">
                <Popup>A standard bike lane (Class II) is a portion of road reserved for the preferential or exclusive use of people biking, indicated by road markings.</Popup>
                <Polyline color="orange" positions={path.shape.coordinates} />
              </FeatureGroup>
              ))}
            </LayerGroup>
          </Overlay>

          <Overlay checked name="Routes">
          <LayerGroup>
              {routes.routes.map(path=>(   
              <FeatureGroup key={path.cnn + (Math.floor(Math.random() *10000)*Math.floor(Math.random()*10000) )} color="purple">
                <Popup>Shared lanes (Class III - sharrows) are typically wide travel lanes shared by bicyclists and vehicles.</Popup>
                <Polyline color="purple" positions={path.shape.coordinates} />
              </FeatureGroup>
              ))}
            </LayerGroup>
          </Overlay>

          <Overlay checked name="Seperated Bikeway">
          <LayerGroup>
              {routes.seperated.map(path=>(   
              <FeatureGroup key={path.cnn + (Math.floor(Math.random() *10000) )} color="blue">
                <Popup>Separated bikeways (Class IV), also commonly referred to as cycle tracks or protected bikeways, are bicycle facilities that are separated from traffic by parked cars, safe-hit posts, transit islands or other physical barriers.</Popup>
                <Polyline positions={path.shape.coordinates} />
              </FeatureGroup>
              ))}
            </LayerGroup>
          </Overlay>
        </LayersControl>
      </Map>
    )
  
}