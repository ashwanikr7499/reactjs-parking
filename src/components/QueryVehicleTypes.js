import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddVehModal } from "./AddVehModal";
import { DeleteVehModal } from "./DeleteVehModal";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export class QueryVehicleTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehs0: [],
      vehs2: [],
      vehs3: [],
      vehs4: [],
      vehs5: [],
      vehs6: [],
      deleteModalShow: false,
      typeofveh: 0,
    };
    this.show0 = this.show0.bind(this);
    this.show2 = this.show2.bind(this);
    this.show3 = this.show3.bind(this);
    this.show4 = this.show4.bind(this);
    this.show5 = this.show5.bind(this);
    this.show6 = this.show6.bind(this);
  }

  async componentDidMount() {
    //called after all components are rendered

    const url0 = "http://localhost:8080/vehicles/all/";
    const response0 = await fetch(url0);
    const data0 = await response0.json();
    this.setState({ vehs0: data0 });
  }
  async componentDidUpdate() {
    //called after components are updated
    // const url0 = "http://localhost:8080/vehicles/all/";
    // const response0 = await fetch(url0);
    // const data0 = await response0.json();
    // //console.log(data);
    // this.setState({ vehs0: data0 });
    // const url2 = "http://localhost:8080/vehicles/2/";
    // const response2 = await fetch(url2);
    // const data2 = await response2.json();
    // //console.log(data);
    // this.setState({ vehs2: data2 });
    // const url3 = "http://localhost:8080/vehicles/3/";
    // const response3 = await fetch(url3);
    // const data3 = await response3.json();
    // //console.log(data);
    // this.setState({ vehs3: data3 });
  }

  onClickButton0 = async () => {
    this.setState({ typeofveh: 0 });
    const url0 = "http://localhost:8080/vehicles/all/";
    const response0 = await fetch(url0);
    const data0 = await response0.json();
    this.setState({ vehs0: data0 });
  };
  onClickButton2 = async () => {
    this.setState({ typeofveh: 2 });
    const url2 = "http://localhost:8080/vehicles/2/";
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    this.setState({ vehs2: data2 });
  };

  onClickButton3 = async () => {
    this.setState({ typeofveh: 3 });
    const url3 = "http://localhost:8080/vehicles/3/";
    const response3 = await fetch(url3);
    const data3 = await response3.json();
    this.setState({ vehs3: data3 });
  };
  onClickButton4 = async () => {
    this.setState({ typeofveh: 4 });
    const url4 = "http://localhost:8080/vehicles/4/";
    const response4 = await fetch(url4);
    const data4 = await response4.json();
    this.setState({ vehs4: data4 });
  };
  onClickButton5 = async () => {
    this.setState({ typeofveh: 5 });
    const url5 = "http://localhost:8080/vehicles/heavy/";
    const response5 = await fetch(url5);
    const data5 = await response5.json();
    this.setState({ vehs5: data5 });
  };
  onClickButton6 = async () => {
    this.setState({ typeofveh: 6 });
    const url6 = "http://localhost:8080/vehicles/sortByTime/";
    const response6 = await fetch(url6);
    const data6 = await response6.json();
    this.setState({ vehs6: data6 });
  };

  show0() {
    const { vehs0, vehid, vehtime } = this.state;
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
          {vehs0.map((veh0) => (
            <tr key={veh0.vehicleNo}>
              <td>{veh0.vehicleNo}</td>
              <td>{veh0.slotNo}</td>
              <td>{veh0.vehicleType}</td>
              <td>{veh0.time}</td>
              <td>{veh0.colour}</td>
              <td>
                <ButtonToolbar>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={() =>
                      this.setState({
                        deleteModalShow: true,
                        vehid: veh0.vehicleNo,
                        vehtime: veh0.time,
                      })
                    }
                  >
                    EXIT
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
                    EXIT
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
    const { vehs3, vehid, vehtime } = this.state;
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
          {vehs3.map((veh3) => (
            <tr key={veh3.vehicleNo}>
              <td>{veh3.vehicleNo}</td>
              <td>{veh3.slotNo}</td>
              <td>{veh3.vehicleType}</td>
              <td>{veh3.time}</td>
              <td>{veh3.colour}</td>
              <td>
                <ButtonToolbar>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={() =>
                      this.setState({
                        deleteModalShow: true,
                        vehid: veh3.vehicleNo,
                        vehtime: veh3.time,
                      })
                    }
                  >
                    EXIT
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
  show4() {
    const { vehs4, vehid, vehtime } = this.state;
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
          {vehs4.map((veh4) => (
            <tr key={veh4.vehicleNo}>
              <td>{veh4.vehicleNo}</td>
              <td>{veh4.slotNo}</td>
              <td>{veh4.vehicleType}</td>
              <td>{veh4.time}</td>
              <td>{veh4.colour}</td>
              <td>
                <ButtonToolbar>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={() =>
                      this.setState({
                        deleteModalShow: true,
                        vehid: veh4.vehicleNo,
                        vehtime: veh4.time,
                      })
                    }
                  >
                    EXIT
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
  show5() {
    const { vehs5, vehid, vehtime } = this.state;
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
          {vehs5.map((veh5) => (
            <tr key={veh5.vehicleNo}>
              <td>{veh5.vehicleNo}</td>
              <td>{veh5.slotNo}</td>
              <td>{veh5.vehicleType}</td>
              <td>{veh5.time}</td>
              <td>{veh5.colour}</td>
              <td>
                <ButtonToolbar>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={() =>
                      this.setState({
                        deleteModalShow: true,
                        vehid: veh5.vehicleNo,
                        vehtime: veh5.time,
                      })
                    }
                  >
                    EXIT
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
  show6() {
    const { vehs6, vehid, vehtime } = this.state;
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
          {vehs6.map((veh6) => (
            <tr key={veh6.vehicleNo}>
              <td>{veh6.vehicleNo}</td>
              <td>{veh6.slotNo}</td>
              <td>{veh6.vehicleType}</td>
              <td>{veh6.time}</td>
              <td>{veh6.colour}</td>
              <td>
                <ButtonToolbar>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={() =>
                      this.setState({
                        deleteModalShow: true,
                        vehid: veh6.vehicleNo,
                        vehtime: veh6.time,
                      })
                    }
                  >
                    EXIT
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
  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div class="container">
        <SplitterLayout  percentage= 'true' secondaryMinSize="85">
          <ButtonGroup vertical>
            <Button variant="secondary" onClick={this.onClickButton0}>All VEHICLES</Button>
            <Button variant="secondary" onClick={this.onClickButton2}>2 Wheelers</Button>
            <Button variant="secondary" onClick={this.onClickButton3}>3 Wheelers</Button>
            <Button variant="secondary" onClick={this.onClickButton4}>4 Wheelers</Button>
            <Button variant="secondary" onClick={this.onClickButton5}>Heavy Weight</Button>
            <Button variant="secondary" onClick={this.onClickButton6}>Sort By Time</Button>
           
            <Button variant="primary" onClick={() => this.setState({ addModalShow: true })}>Add Vehicle</Button>

              <AddVehModal
                show={this.state.addModalShow}
                onHide={addModalClose}
              ></AddVehModal>
            
          </ButtonGroup>
          {(() => {
            if (this.state.typeofveh === 0) {
              return this.show0();
            }
            if (this.state.typeofveh === 2) {
              return this.show2();
            } else if (this.state.typeofveh === 3) {
              return this.show3();
            } else if (this.state.typeofveh === 4) {
              return this.show4();
            } else if (this.state.typeofveh === 5) {
              return this.show5();
            } else if (this.state.typeofveh === 6) {
              return this.show6();
            }
          })()}
        </SplitterLayout>
      </div>
    );
  }
}
