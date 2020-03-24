import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";

class Legend extends MapControl {
  createLeafletElement(props) {}

  componentDidMount() { 

    const legend = L.control({ position: "topright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const grades = ["Light", "Average", "Medium", "Heavy"];
      const colors = ["green","yellow","red","purple"]
      let labels = [];

      for (let i = 0; i < grades.length; i++) {
        let level = grades[i];
        let color = colors[i]

        labels.push(
          '<i style="background:' +
            color +
            '"></i> ' +
            level
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };

    const { map } = this.props.leaflet;
    legend.addTo(map);
  }
}

export default withLeaflet(Legend);
