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
  TileLayer,
} from "react-leaflet"
const { BaseLayer, Overlay } = LayersControl

const center = [37.773943, -122.449484]
const rectangle = [
  [37.773943, -122.449484],
  [37.773943, -122.49],
]

export default class LayersControlExample extends Component<{}> {
  render() {
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
          <Overlay name="Injury">
            <Marker position={center}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Overlay>
          <Overlay checked name="Fatal">
            <LayerGroup>
              <Circle center={center} fillColor="blue" radius={200} />
              <Circle
                center={center}
                fillColor="red"
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[center[0], center[1]-0.05]}
                  color="green"
                  fillColor="green"
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </Overlay>
          <Overlay name="Path">
            <FeatureGroup color="purple">
              <Popup>Popup for path</Popup>
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </Overlay>
        </LayersControl>
      </Map>
    )
  }
}