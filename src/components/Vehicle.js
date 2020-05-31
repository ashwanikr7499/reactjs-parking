import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddVehModal } from "./AddVehModal";
import { DeleteVehModal } from "./DeleteVehModal";
import { QueryVehicleTypes } from "./QueryVehicleTypes";

export class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = { vehs: [], addModalShow: false, deleteModalShow: false };
  }

  render() {
    const { vehs, vehid, vehtime } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    //let deleteModalClose = () => this.setState({ deleteModalShow: false });
    return (
      <div>
        <QueryVehicleTypes />

        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add Vehicle
          </Button>

          <AddVehModal
            show={this.state.addModalShow}
            onHide={addModalClose}
          ></AddVehModal>
        </ButtonToolbar>
      </div>
    );
  }
}
