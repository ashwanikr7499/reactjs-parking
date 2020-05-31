import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddVehModal } from "./AddVehModal";
import { DeleteVehModal } from "./DeleteVehModal";

export class QueryVehicleTypes extends Component {
  constructor(props) {
    super(props);
    this.state = { vehs2: [], vehs3: [], deleteModalShow: false, typeofveh: 2 };
    this.show2 = this.show2.bind(this);
    this.show3 = this.show3.bind(this);
  }

  componentDidMount() {
    //called after all components are rendered
    this.refreshList2();
    this.refreshList3();
  }
  componentDidUpdate() {
    //to update list immediately after closing popup
    this.refreshList2();
    this.refreshList3();
  }

  async refreshList2() {
    const url = "http://localhost:8080/vehicles/2/";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    this.setState({ vehs2: data });
  }
  async refreshList3() {
    const url = "http://localhost:8080/vehicles/3/";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    this.setState({ vehs2: data });
  }

  onClickButton1 = () => {
    this.setState({ typeofveh: 2 });
  };

  onClickButton2 = () => {
    this.setState({ typeofveh: 3 });
  };
  show2() {
    const { vehs2, vehid, vehtime } = this.state;
    let deleteModalClose = () => this.setState({ deleteModalShow: false });
    return (
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
          {vehs2.map((veh2) => (
            <tr key={veh2.vehicleNo}>
              <td>{veh2.vehicleNo}</td>
              <td>{veh2.slotNo}</td>
              <td>{veh2.vehicleType}</td>
              <td>{veh2.time}</td>
              <td>{veh2.colour}</td>
              <td>
                <ButtonToolbar>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={() =>
                      this.setState({
                        deleteModalShow: true,
                        vehid: veh2.vehicleNo,
                        vehtime: veh2.time,
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
    );
  }
  show3() {
    return <h2>Three wheels</h2>;
  }

  // etc...

  render() {
    // if (typeofveh===2) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else if(typeofveh===3 ) {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }
    return (
      <div>
        <button onClick={this.onClickButton1}>All 2 Wheelers</button>
        <button onClick={this.onClickButton2}>All 3 Wheelers</button>

        {(() => {
          if (this.state.typeofveh === 2) {
            return this.show2();
          } else if (this.state.typeofveh === 3) {
            return this.show3();
          } else {
            return <div>None working</div>;
          }
        })()}
      </div>
    );
  }
}
