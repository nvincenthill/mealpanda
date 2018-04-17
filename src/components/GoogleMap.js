import { Map } from "google-maps-react";
import React from "react";
// import ReactDOM from "react-dom";

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
    // const marker = new Marker({
    //           position: {lat: this.props.recipeData.lat, lng: this.props.recipeData.lng},
    //           map: map,
    //           title: this.props.recipeData.name
    //         });
    // const contentString = "test"
    // const infowindow = new InfoWindow({
    //           content: contentString
    //         });
    return (
        <div className="map-holder">{map}</div>
    )
  }
}

export default GoogleMap;
