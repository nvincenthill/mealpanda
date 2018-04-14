import { InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import GoogleMap from "./GoogleMap";
import React from "react";

export class MapContainer extends React.Component {
  render() {
    const style = {
          width: '300px',
          height: '300px',
          position: "relative",
          align: "center"
        }
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="map-container" style={style}>
        <GoogleMap recipeData={this.props.recipeData} google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2XN8SPcbYQLyfKHgltf9Oa91c6KN8dk8"
})(MapContainer);
