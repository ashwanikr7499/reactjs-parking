import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddVehModal } from "./AddVehModal";
import { DeleteVehModal } from "./DeleteVehModal";

export class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = { vehs: [], addModalShow: false, deleteModalShow: false };
  }

  componentDidMount() {
    //called after all components are rendered
    this.refreshList();
  }
  componentDidUpdate() {
    //to update list immediately after closing popup
    this.refreshList();
  }

  async refreshList() {
    const url = "http://localhost:8080/vehicles/all/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ vehs: data });
  }
  render() {
    const { vehs, vehid, vehtime } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let deleteModalClose = () => this.setState({ deleteModalShow: false });
    return (
      <div class="row">
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>vehicleNo</th>
              <th>slotNo</th>
              <th>vehicleType</th>
              <th>time</th>
              <th>colour</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {vehs.map((veh) => (
              <tr key={veh.vehicleNo}>
                <td>{veh.vehicleNo}</td>
                <td>{veh.slotNo}</td>
                <td>{veh.vehicleType}</td>
                <td>{veh.time}</td>
                <td>{veh.colour}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="danger"
                      onClick={() =>
                        this.setState({
                          deleteModalShow: true,
                          vehid: veh.vehicleNo,
                          vehtime: veh.time,
                        })
                      }
                    >
                      Delete
                    </Button>

                    <DeleteVehModal
                      show={this.state.deleteModalShow}
                      //invoking the close/cross buuton
                      onHide={deleteModalClose}
                      //will be passed={render  const 1st line or this.state.vehid}
                      vehid={vehid}
                      vehtime={vehtime}
                    ></DeleteVehModal>
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

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
