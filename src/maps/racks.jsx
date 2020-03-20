import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";


export const icon = new Icon({
  iconUrl: "../public/bike_black.png",
  iconSize: [25, 25]
});

class App extends React.Component{

  // SF Coordinates
  // latitude:37.773943,
  // longitude:-122.449484,

  

  constructor(){
    super();
    this.state={
      bikeRacks : [],
      activeRack : null,
      rackDisplay : false
    }

    this.activeRack = null; 
    this.setActiveRack = null;
  }

  componentDidMount(){
    fetch("https://data.sfgov.org/resource/hn4j-6fx5.json")
    .then(results=> {return results.json()})
    .then(data=>{
      console.log(data);
      this.setState({
        bikeRacks: data,
      })
    })

    console.log("state",this.state.bikeRacks);
  }


  render(){
    return (
      <div>
        <div>
          <h1>
            SFRider: Biking SF Timelapse Data
          </h1>
        </div>
  
        <div>
        <Map center={[37.773943, -122.449484]} zoom={13.4}>

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {this.state.bikeRacks.map(rack => (
            <Marker
              key={rack.objectid}
              position={[
                rack.lat,
                rack.lon
              ]}
              onClick={() => {
                this.setActiverack = rack;
                this.setState({
                  activeRack: rack,
                  rackDisplay: true
                })
              }}
            />
          ))}

          {this.state.activeRack && (
            <Popup
              position={[
                this.state.activeRack.lat,
                this.state.activeRack.lon
              ]}
              onClose={() => {
                this.setState({
                  activeRack : null,
                  rackDisplay : false
                })
              }}
            >
              <div>
                <h2>Racks : {this.state.activeRack.racks}</h2>
                <h2>Spaces : {this.state.activeRack.spaces}</h2>
                <h2>Yr Installed : {this.state.activeRack.install_yr}</h2>

              </div>
            </Popup>
          )}
        </Map>
  
        </div>
  
      </div>
    );

  }
}

export default App;