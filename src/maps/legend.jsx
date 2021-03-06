import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";

class Legend extends MapControl {
  createLeafletElement(props) {}

  componentDidMount() { 

    const legend = L.control({ position: "topright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const cats = ["Light", "Medium", "Heavy", "Dense"];
      // const backgroundColors = ["green","yellow","red","purple"]
      const backgroundColors = ["144, 155, 244","103, 232, 51","  248, 254, 77","254,102,31"];

      const letterColors = ["white","black","black","white"]
      let labels = [];

      for (let i = 0; i < cats.length; i++) {
        let level = cats[i];
        let bColor = backgroundColors[i];
        let tColor = letterColors[i];

        labels.push(
          '<i style="background:rgb(' +
            bColor + ');color:' + tColor +';' +
            '"> ' +
            level + '</i>'
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };

    const { map } = this.props.leaflet;
    legend.addTo(map);
  }
  
  componentWillUnmount(){
      //This overwrite original version wich attemped to remove too late and crashed site
    //   console.log("this should replace old one");
  }
}

export default withLeaflet(Legend);
