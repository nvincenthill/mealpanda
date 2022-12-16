import { Map } from "google-maps-react";
import React from "react";

export class GoogleMap extends React.Component {
  render() {
    const style = {
      width: '300px',
      height: '300px',
      position: "relative",
      align: "center"
    }
    const map = <Map className="map" google={this.props.google} style={style} initialCenter={{
            lat: this.props.recipeData.lat,
            lng: this.props.recipeData.lng
          }} />
    return (
        <div className="map-holder">{map}</div>
    )
  }
}

export default GoogleMap;
