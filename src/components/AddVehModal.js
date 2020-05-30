import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddVehModal extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8080/vehicles/getTicket", {
      method: "POST",
      //mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vehicleNo: event.target.vehicleNo.value,
        slotNo: event.target.slotNo.value,
        vehicleType: event.target.vehicleType.value,
        time: event.target.time.value,
        colour: event.target.colour.value,
      }),
    })
      //console.log(result);

      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        //error in consuming api
        (error) => {
          alert("Failed");
        }
      );
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Vehicle
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="vehicleNo">
                    <Form.Label>vehicleNo</Form.Label>
                    <Form.Control
                      type="text"
                      name="vehicleNo"
                      required
                      placeholder="vehicleNo"
                    />
                  </Form.Group>

                  <Form.Group controlId="slotNo">
                    <Form.Label>slotNo</Form.Label>
                    <Form.Control
                      type="text"
                      name="slotNo"
                      required
                      placeholder="slotNo"
                    />
                  </Form.Group>

                  <Form.Group controlId="vehicleType">
                    <Form.Label>vehicleType</Form.Label>
                    <Form.Control
                      type="text"
                      name="vehicleType"
                      required
                      placeholder="vehicleType"
                    />
                  </Form.Group>

                  <Form.Group controlId="time">
                    <Form.Label>time</Form.Label>
                    <Form.Control
                      type="text"
                      name="time"
                      required
                      placeholder="time"
                    />
                  </Form.Group>

                  <Form.Group controlId="colour">
                    <Form.Label>colour</Form.Label>
                    <Form.Control
                      type="text"
                      name="colour"
                      required
                      placeholder="colour"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Button variant="primary" type="Submit">
                      Add Vehicle
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
