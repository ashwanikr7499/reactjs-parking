import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
export class DeleteVehModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8080/vehicles/exit", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        vehicleNo: event.target.vehicleNo.value,
        time: event.target.time.value,
      }),
    })
      .then((res) => res.text())
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
      <div className="container">
        {/* Modal Window */}

        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* Modal Window Header */}

          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Exit Vehicle
            </Modal.Title>
          </Modal.Header>

          {/* Modal Window Body */}

          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  {/* Input Vehicle No */}
                  <Form.Group controlId="vehicleNo">
                    <Form.Label>Vehicle Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="vehicleNo"
                      required
                      disabled
                      defaultValue={this.props.vehid}
                      placeholder="Vehicle Number"
                    />
                  </Form.Group>

                  {/* Input OutTime */}
                  <Form.Group controlId="time">
                    <Form.Label>Exit Time</Form.Label>
                    <Form.Control
                      type="text"
                      name="time"
                      required
                      defaultValue={this.props.vehtime}
                      placeholder="Exit Time"
                    />
                  </Form.Group>

                  {/* Exit Vehicle Button */}
                  <Form.Group>
                    <Button variant="primary" type="Submit">
                      Exit Vehicle
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          {/* Modal Window Footer */}

          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
