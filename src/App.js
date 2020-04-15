import React from "react";
import { Map, Marker, Popup, TileLayer, MapControl, withLeaflet } from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";
import Racks from "./maps/racks";
import Traffic from "./maps/traffic";
import Crime from "./maps/crime";
import Accidents from "./maps/accidents";
import Lights from "./maps/lights";
import Routes from "./maps/routes";
import Scenic from "./maps/scenic";
import All from "./maps/all";
import Modal from "./components/modal";


const icon = new Icon({
  iconUrl: require("./images/test.jpg"),
  iconSize: [25, 25]
});

class App extends React.Component{

  // SF Coordinates
  // latitude:37.773943,
  // longitude:-122.449484,

  

  constructor(){
    super();
    this.state={
      mainMapSelection:"traffic",
      bikeRacks : [],
      crime : [],
      accidents : [],
      traffic: [],
      routes: {}
    }

    this.changeMap = this.changeMap.bind(this);

  }

  componentDidMount(){

    //fetch racks data
    fetch("https://data.sfgov.org/resource/hn4j-6fx5.json")
    .then(results=> {return results.json()})
    .then(data=>{
      this.setState({
        bikeRacks: data,
      })
    })

    //fetch crime and accident data
    fetch("https://data.sfgov.org/resource/wg3w-h783.json")
    .then(results=> {return results.json()})
    .then(data=>{
      let crimeData = data.filter(crime=> crime.latitude && crime.incident_category === "Larceny Theft");
      let accidentData = data.filter(crime=> crime.latitude && crime.incident_category === "Traffic Collision");
      this.setState({
        crime: crimeData,
        accidents: accidentData
      })
    })

    //fetch accident data
    // fetch("https://data.sfgov.org/resource/nuek-vuh3.json")
    // .then(results=> {return results.json()})
    // .then(data=>{
    //   // console.log(data);
    //   // let crimeData = data.filter(crime=> crime.latitude && crime.incident_category === "Larceny Theft");
    //   let accidentData = data.filter(acc=> acc.location.latitude && acc.call_type === "Traffic Collision");
    //   // console.log(accidentData);
    //   this.setState({
    //     accidents: accidentData
    //   })
    // })

    //fetch traffic data
    fetch("https://data.sfgov.org/resource/awac-r27z.json")
    .then(results=> {return results.json()})
    .then(data=>{
      //data = data.filter(crime=> crime.latitude && crime.incident_category === "Larceny Theft");
      this.setState({
        traffic: data,
      })
    })

    //https://data.sfgov.org/resource/ygmz-vaxd.json
    //fetch Bicyle routes location
    fetch("https://data.sfgov.org/resource/a5zr-cehj.json")
    .then(results=> {return results.json()})
    .then(data1=>{
      let routes = {};
      routes.lights = data1;
      fetch("https://data.sfgov.org/resource/ygmz-vaxd.json")
      .then(results=> {return results.json()})
      .then(data2=>{
        routes.paths = [];
        routes.lanes = [];
        routes.routes = [];
        routes.seperated = [];
        for (let i = 0; i < data2.length; i++) {
          const ele = data2[i];
          for (let j = 0; j < ele.shape.coordinates.length; j++) {
            const coordEle = ele.shape.coordinates[j];
            let longitude = coordEle[0];
            let latitude = coordEle[1];
            ele.shape.coordinates[j] = [latitude,longitude];
          }
          switch (ele.symbology) {
            case "BIKE ROUTE":
              routes.routes.push(ele);
            break;

            case "BIKE PATH":
              routes.paths.push(ele);
            break;

            case "SEPARATED BIKEWAY":
              routes.seperated.push(ele);
            break;
          
            default:
              routes.lanes.push(ele);
            break;
          }
        }



        this.setState({
          routes: routes,
        })
      })
    })

    // console.log("state",this.state.bikeRacks);


  }

  changeMap(newMap){
      this.setState({
        mainMapSelection : newMap
      })
  }

  render(){
    let mapDisplay;
    switch (this.state.mainMapSelection) {
      case "racks":
        mapDisplay = (<Racks 
                        icon={icon}
                        racks={this.state.bikeRacks}/>)
        break;
      case "traffic":
        // console.log("chose traffic to display")
        mapDisplay = (<Traffic traffic={this.state.traffic}/>)
        break;
    
      case "crime":
        // console.log("chose traffic to display")
        mapDisplay = (<Crime crime={this.state.crime}/>)
        break;

      case "routes":
          // console.log("chose routes to display")
          mapDisplay = (<Routes routes={this.state.routes}/>)
          break;

      case "accidents":
        // console.log("chose accidents to display")
        mapDisplay = (<Accidents accidents={this.state.accidents}/>)
        break;

      case "all":
        // console.log("chose all to display")
        mapDisplay = (<All 
                        crime={this.state.crime}
                        accidents={this.state.accidents}
                        racks={this.state.bikeRacks}
                        traffic={this.state.traffic}
                        routes={this.state.routes}
                      />)
        break;

        case "scenic":
        // console.log("chose scenic to display")
        mapDisplay = (<Scenic 
                        crime={this.state.crime}
                        accidents={this.state.accidents}
                        racks={this.state.bikeRacks}
                        traffic={this.state.traffic}
                        routes={this.state.routes}
                      />)
        break;
    
      default:
        break;
    }


    return (
      <div className="main-container">

        <div className="logo">
                <h1>
                  SFRider
                </h1>
        </div>

        <div className="tabs-wrapper">
          <div className="tabs">
            
            <div className="tab">
              <input type="radio" 
                      name="css-tabs" 
                      id="tab-1" 
                      defaultChecked={this.state.mainMapSelection==="traffic"} 
                      className="tab-switch"
                      onClick={()=>{this.changeMap("traffic")}}
              />
              <label htmlFor="tab-1" className="tab-label">Traffic</label>
            </div>

            <div className="tab">
              <input type="radio" 
                      name="css-tabs" 
                      id="tab-2" 
                      defaultChecked={this.state.mainMapSelection==="racks"} 
                      className="tab-switch"
                      onClick={()=>{this.changeMap("racks")}}
              />
              <label htmlFor="tab-2" className="tab-label">Racks</label>
            </div>

            <div className="tab">
              <input type="radio" 
                      name="css-tabs" 
                      id="tab-5" 
                      defaultChecked={this.state.mainMapSelection==="routes"} 
                      className="tab-switch"
                      onClick={()=>{this.changeMap("routes")}}
              />
              <label htmlFor="tab-5" className="tab-label">Routes</label>
            </div>

            <div className="tab">
              <input type="radio" 
                      name="css-tabs" 
                      id="tab-4" 
                      defaultChecked={this.state.mainMapSelection==="crime"} 
                      className="tab-switch"
                      onClick={()=>{this.changeMap("crime")}}
              />
              <label htmlFor="tab-4" className="tab-label">Crime</label>
            </div>

            <div className="tab">
              <input type="radio" 
                      name="css-tabs" 
                      id="tab-6" 
                      defaultChecked={this.state.mainMapSelection==="all"} 
                      className="tab-switch"
                      onClick={()=>{this.changeMap("all")}}
              />
              <label htmlFor="tab-6" className="tab-label">All</label>
            </div>

            <div className="tab">
              <input type="radio" 
                      name="css-tabs" 
                      id="tab-7" 
                      defaultChecked={this.state.mainMapSelection==="scenic"} 
                      className="tab-switch"
                      onClick={()=>{this.changeMap("scenic")}}
              />
              <label htmlFor="tab-7" className="tab-label">Scenic</label>
            </div>

          </div> 
        </div>

        <div className="map-container">
          {mapDisplay}
        </div>

        
      </div>
    );

  }
}

export default App;