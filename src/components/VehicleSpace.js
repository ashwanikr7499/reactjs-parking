import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";

export class VehicleSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehs0: [],
      vehs2: [],
      vehs3: [],
      vehs4: [],
      vehs5: [],
      typeofveh: 0,
    };
    this.show0 = this.show0.bind(this);
    this.show2 = this.show2.bind(this);
    this.show3 = this.show3.bind(this);
    this.show4 = this.show4.bind(this);
    this.show5 = this.show5.bind(this);
  }
  async componentDidMount() {
    //called after all components are rendered
    const url0 = "http://localhost:8080/slots/";
    const response0 = await fetch(url0);
    const data0 = await response0.json();
    this.setState({ vehs0: data0 });
  }

  onClickButton0 = async () => {
    this.setState({ typeofveh: 0 });
    const url0 = "http://localhost:8080/slots/";
    const response0 = await fetch(url0);
    const data0 = await response0.json();
    this.setState({ vehs0: data0 });
  };
  onClickButton2 = async () => {
    this.setState({ typeofveh: 2 });
    const url2 = "http://localhost:8080/slots/2/";
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    this.setState({ vehs2: data2 });
  };

  onClickButton3 = async () => {
    this.setState({ typeofveh: 3 });
    const url3 = "http://localhost:8080/slots/3/";
    const response3 = await fetch(url3);
    const data3 = await response3.json();
    this.setState({ vehs3: data3 });
  };
  onClickButton4 = async () => {
    this.setState({ typeofveh: 4 });
    const url4 = "http://localhost:8080/slots/4/";
    const response4 = await fetch(url4);
    const data4 = await response4.json();
    this.setState({ vehs4: data4 });
  };
  onClickButton5 = async () => {
    this.setState({ typeofveh: 5 });
    const url5 = "http://localhost:8080/slots/heavy/";
    const response5 = await fetch(url5);
    const data5 = await response5.json();
    this.setState({ vehs5: data5 });
  };
  show0() {
    const { vehs0 } = this.state;
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>slotNo</th>
            <th>vehicleNo</th>
            <th>slotType</th>
            <th>isEmpty</th>
          </tr>
        </thead>
        <tbody>
          {vehs0.map((veh0) => (
            <tr key={veh0.slotNo}>
              <td>{veh0.slotNo}</td>
              <td>{veh0.vehicleNo}</td>
              <td>{veh0.slotType}</td>
              <td>{veh0.isEmpty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  show2() {
    const { vehs2 } = this.state;
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>slotNo</th>
            <th>vehicleNo</th>
            <th>slotType</th>
            <th>isEmpty</th>
          </tr>
        </thead>
        <tbody>
          {vehs2.map((veh2) => (
            <tr key={veh2.slotNo}>
              <td>{veh2.slotNo}</td>
              <td>{veh2.vehicleNo}</td>
              <td>{veh2.slotType}</td>
              <td>{veh2.isEmpty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  show3() {
    const { vehs3 } = this.state;
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>slotNo</th>
            <th>vehicleNo</th>
            <th>slotType</th>
            <th>isEmpty</th>
          </tr>
        </thead>
        <tbody>
          {vehs3.map((veh3) => (
            <tr key={veh3.slotNo}>
              <td>{veh3.slotNo}</td>
              <td>{veh3.vehicleNo}</td>
              <td>{veh3.slotType}</td>
              <td>{veh3.isEmpty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  show4() {
    const { vehs4 } = this.state;
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>slotNo</th>
            <th>vehicleNo</th>
            <th>slotType</th>
            <th>isEmpty</th>
          </tr>
        </thead>
        <tbody>
          {vehs4.map((veh4) => (
            <tr key={veh4.slotNo}>
              <td>{veh4.slotNo}</td>
              <td>{veh4.vehicleNo}</td>
              <td>{veh4.slotType}</td>
              <td>{veh4.isEmpty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  show5() {
    const { vehs5 } = this.state;
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>slotNo</th>
            <th>vehicleNo</th>
            <th>slotType</th>
            <th>isEmpty</th>
          </tr>
        </thead>
        <tbody>
          {vehs5.map((veh5) => (
            <tr key={veh5.slotNo}>
              <td>{veh5.slotNo}</td>
              <td>{veh5.vehicleNo}</td>
              <td>{veh5.slotType}</td>
              <td>{veh5.isEmpty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return (
      <div>
        <button onClick={this.onClickButton0}>All SLOTS</button>
        <button onClick={this.onClickButton2}>2 Wheeler Slots</button>
        <button onClick={this.onClickButton3}>3 Wheeler Slots</button>
        <button onClick={this.onClickButton4}>4 Wheeler Slots</button>
        <button onClick={this.onClickButton5}>Heavy Vehicle Slots</button>

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
          }
        })()}
      </div>
    );
  }
}
