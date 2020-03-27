import { MapControl, withLeaflet, Marker } from "react-leaflet";
import L from "leaflet";



class Legend extends MapControl {
  createLeafletElement(props) {}

  componentDidMount() { 

    console.log(this.props.markers);
    let years = {
      "2015-Present":[],
      "2010-2014":[],
      "2005-2009":[],
      "pre-2005":[],
    }

    const theIcon = L.icon({
      iconUrl: require('../images/lock.png'),
      iconSize: [35, 35],
    });

//     lat: "37.754811"
// lon: "-122.418601"
    for (let i = 0; i < this.props.markers.length; i++) {
      const element = this.props.markers[i];
      // console.log(element.install_yr);
      let yr = parseInt(element.install_yr)
      switch (true) {
        case (yr>2014):
          years["2015-Present"].push(element)
          break;
      
        case (yr>2009):
          years["2010-2014"].push(element)
          break;

        case (yr>2004):
          years["2005-2009"].push(element)
          break;

        default:
          years["pre-2005"].push(element)
          break;
      }
    }

    var yr2015_Pres = L.layerGroup(years["2015-Present"].map( rk => (L.marker([rk.lat, rk.lon],{icon: theIcon}).bindPopup(`Spaces: ${rk.spaces}`))))
    
    var yr2010_2014 = L.layerGroup(years["2010-2014"].map( rk => (L.marker([rk.lat, rk.lon],{icon: theIcon}).bindPopup(`Spaces: ${rk.spaces}`))))
    
    var yr2005_2009 = L.layerGroup(years["2005-2009"].map( rk => (L.marker([rk.lat, rk.lon],{icon: theIcon}).bindPopup(`Spaces: ${rk.spaces}`))))
    
    var yrpre_2005 = L.layerGroup(years["pre-2005"].map( rk => (L.marker([rk.lat, rk.lon],{icon: theIcon}).bindPopup(`Spaces: ${rk.spaces}`))))
    
    var yrAll = L.layerGroup(this.props.markers.map( rk => (L.marker([rk.lat, rk.lon],{icon: theIcon}).bindPopup(`Spaces: ${rk.spaces}`))))
    
    
    const { map } = this.props.leaflet;

    
    L.control.layers({},{
    "2015-Present":yr2015_Pres,
    "2010-2014" :yr2010_2014,
    "2005-2009" :yr2005_2009,
    "pre-2005" :yrpre_2005,
    "All" : yrAll,
    },{position:"topleft",collapsed:false}).addTo(map)

    L.control.scale().addTo(map);
  }
  
  componentWillUnmount(){
      //This overwrite original version wich attemped to remove too late and crashed site
    //   console.log("this should replace old one");
  }
}

export default withLeaflet(Legend);
