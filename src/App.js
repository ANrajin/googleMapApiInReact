import React, { Component } from "react";
import "./App.css";

import MapOne from "./components/MapOne";

export default class App extends Component {
  state = {
    lat: "",
    lng: "",
  };

  componentDidMount() {
    this.getCurrentLocation();
  }

  //get my geo locations
  getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };

  render() {
    if (this.state.lat) {
      return (
        <div>
          <MapOne lat={this.state.lat} lng={this.state.lng} />
        </div>
      );
    } else {
      return (
        <div>
          <h4 style={{ color: "#f0ad4e" }}>
            Please allow location access to load the map
          </h4>
        </div>
      );
    }
  }
}
