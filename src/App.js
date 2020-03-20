import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";
import Racks from "./maps/racks";
import Traffic from "./maps/traffic";


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
      mainMapSelection:"racks",
      bikeRacks : [],
      accidentData: []
    }

    this.changeMap = this.changeMap.bind(this);

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

  changeMap(newMap){
    console.log("changing maps to ", newMap);
      this.setState({
        mainMapSelection : newMap
      })
  }

  render(){
    let mapDisplay;
    switch (this.state.mainMapSelection) {
      case "racks":
        mapDisplay = (<Racks racks={this.state.bikeRacks}/>)
        break;
      case "traffic":
        console.log("chose traffic to display")
        mapDisplay = (<Traffic racks={this.state.bikeRacks}/>)
        break;
    
      default:
        break;
    }


    return (
      <div>
        <div>
                <h1>
                  SFRider: Biking SF Timelapse Data
                </h1>
        </div>

        <div class="tabs-wrapper">
          <div class="tabs">

            <div class="tab">
              <input type="radio" 
                      name="css-tabs" 
                      id="tab-1" 
                      checked={this.state.mainMapSelection==="racks"} 
                      class="tab-switch"
                      onClick={()=>{this.changeMap("racks")}}
              />
              <label for="tab-1" class="tab-label">Racks</label>
            </div>

            <div class="tab">
              <input type="radio" 
                      name="css-tabs" 
                      id="tab-2" 
                      checked={this.state.mainMapSelection==="traffic"} 
                      class="tab-switch"
                      onClick={()=>{this.changeMap("traffic")}}
              />
              <label for="tab-2" class="tab-label">Traffic</label>
            </div>

            <div class="tab">
              <input type="radio" 
                      name="css-tabs" 
                      id="tab-3" 
                      checked={this.state.mainMapSelection==="accidents"} 
                      class="tab-switch"
                      onClick={()=>{this.changeMap("accidents")}}
              />
              <label for="tab-3" class="tab-label">Accidents</label>
            </div>

            <div class="tab">
              <input type="radio" 
                      name="css-tabs" 
                      id="tab-4" 
                      checked={this.state.mainMapSelection==="al"} 
                      class="tab-switch"
                      onClick={()=>{this.changeMap("all")}}
              />
              <label for="tab-4" class="tab-label">All</label>
            </div>

          </div> 
        </div>

        <div>
          {mapDisplay}
        </div>

        
      </div>
    );

  }
}

export default App;