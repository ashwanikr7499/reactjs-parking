import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddVehModal } from "./AddVehModal";
import { DeleteVehModal } from "./DeleteVehModal";
import { QueryVehicleTypes } from "./QueryVehicleTypes";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";


export class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehs: [], addModalShow: false, deleteModalShow: false };
  }

  // onChange = (event) => {
  //   this.setState({
  //     panes: event.newState
  //   });
  // }

  render() {
    const { vehs, vehid, vehtime } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    //let deleteModalClose = () => this.setState({ deleteModalShow: false });
    return (
      <div>
        <QueryVehicleTypes />
        
      </div>
    );
  }
}
