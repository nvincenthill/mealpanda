import { InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import GoogleMap from "./GoogleMap";
import React from "react";

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: "200px",
      height: "200px"
    };
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return (
      <div style={style}>
        <GoogleMap google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2XN8SPcbYQLyfKHgltf9Oa91c6KN8dk8"
})(MapContainer);
