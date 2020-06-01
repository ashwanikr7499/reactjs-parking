import React, { Component } from "react";
import parkingImage from "./parkingImage.jpg";
export class Home extends Component {
  render() {
    return (
      <div class="container">
        <h3> Welcome to Parking System Application</h3>
        <img src={parkingImage} width="1000" height="600" />
      </div>
    );
  }
}
