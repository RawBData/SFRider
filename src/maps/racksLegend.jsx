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

    
    var firstGroup = L.layerGroup([
      L.marker([37.754811, -122.418601]).bindPopup("test"),
    ]);
    var secondGroup = L.layerGroup([
      L.marker([37.754811, -122.418601]),
    ]);

    var yr2015_Pres = L.layerGroup(years["2015-Present"].map( rk => (L.marker([rk.lat, rk.lon]).bindPopup(`Spaces: ${rk.spaces}`))))
    
    var yr2010_2014 = L.layerGroup(years["2010-2014"].map( rk => (L.marker([rk.lat, rk.lon]).bindPopup(`Spaces: ${rk.spaces}`))))
    
    var yr2005_2009 = L.layerGroup(years["2005-2009"].map( rk => (L.marker([rk.lat, rk.lon]).bindPopup(`Spaces: ${rk.spaces}`))))
    
    var yrpre_2005 = L.layerGroup(years["pre-2005"].map( rk => (L.marker([rk.lat, rk.lon]).bindPopup(`Spaces: ${rk.spaces}`))))
    
    
    const legend = L.control({ position: "topright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const cats = ["Light", "Medium", "Heavy", "Dense"];
      const backgroundColors = ["green","yellow","red","purple"]
      const letterColors = ["white","black","white","white"]
      let labels = [];

      for (let i = 0; i < cats.length; i++) {
        let level = cats[i];
        let bColor = backgroundColors[i];
        let tColor = letterColors[i];

        labels.push(
          '<i style="background:' +
            bColor + ';color:' + tColor +';' +
            '"> ' +
            level + '</i>'
        );
      }

      
      div.innerHTML = labels.join("<br>");
      return div;
    };
    
    const { map } = this.props.leaflet;

    
    L.control.layers({
    "2015-Present":yr2015_Pres,
    "2010-2014" :yr2010_2014,
    "2005-2009" :yr2005_2009,
    "pre-2005" :yrpre_2005
    }).addTo(map)

    L.control.scale().addTo(map);
    // legend.addTo(map);
  }
  
  componentWillUnmount(){
      //This overwrite original version wich attemped to remove too late and crashed site
    //   console.log("this should replace old one");
  }
}

export default withLeaflet(Legend);
