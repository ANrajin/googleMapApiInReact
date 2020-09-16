import React, { Component } from "react";
import "./MapOne.css";

export default class MapOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      name: "AN Rajin",
    };
  }

  componentDidMount() {
    this.renderMap();
  }

  //creating script tag fro Google map javascript api
  loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0];

    var script = window.document.createElement("script");

    script.src = url;

    script.async = true;
    script.defer = true;

    index.parentNode.insertBefore(script, index);
  }

  renderMap = () => {
    this.loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBl6_s75UWQTWbJ7U03shON7sYO-knOqi4&callback=initMap&libraries=&v=weekly"
    );

    window.initMap = this.initMap;
  };

  //initialise the map
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: this.state.lat,
        lng: this.state.lng,
      },
      zoom: 18,
    });

    var marker = new window.google.maps.Marker({
      position: { lat: this.state.lat, lng: this.state.lng },
      map: map,
    });

    var infowindow = new window.google.maps.InfoWindow({
      content: `
      <div>
        <form>
          <label>Co-ordinates</label>
          <input type="text" value = "${this.state.lat}, ${this.state.lng}" />

          <label>Name</label>
          <input type="text" value = "${this.state.name}" />

          <button type="button">Click</button>
        </form>
      </div>
      `,
      maxWidth: 200,
    });

    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
  };

  onSubmit = () => {
    console.log("Hello");
  };

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}
