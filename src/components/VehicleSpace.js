import React, { Component } from "react";
import { Table } from "react-bootstrap";

export class VehicleSpace extends Component {
  constructor(props) {
    super(props);
    this.state = { vehs: [] };
  }
  async componentDidMount() {
    //this.refreshList();
    const url = "http://localhost:8080/slots/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ vehs: data });
  }
  refreshList() {
    // this.setState({
    //   vehs: [
    //     { slotNo: 1, vehicleNo: "none", slotType: "2", empty: "true" },
    //     { slotNo: 2, vehicleNo: "none", slotType: "2", empty: "true" },
    //   ],
    // });
    // fetch("http://localhost:8080/slots/")
    //   .then((response) => response.json)
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({ vehs: data });
    //   });
  }
  render() {
    const { vehs } = this.state;
    return (
      <div className="mt-5 d-flex justify-content-left">
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
            {vehs.map((veh) => (
              <tr key={veh.slotNo}>
                <td>{veh.slotNo}</td>
                <td>{veh.vehicleNo}</td>
                <td>{veh.slotType}</td>
                <td>{veh.isEmpty}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
