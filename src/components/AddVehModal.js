import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
export class AddVehModal extends Component {
  constructor(props) {
    super(props);
    this.state = { snackbaropen: false, snackbarmsg: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  snackbarClose = (event) => {
    this.setState({ snackbaropen: false });
  };

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
      .then((res) => res.text())
      .then(
        (result) => {
          //alert(result);
          this.setState({ snackbaropen: true, snackbarmsg: result });
        },
        //error in consuming api
        (error) => {
          //alert(error);
          this.setState({ snackbaropen: true, snackbarmsg: error });
        }
      );
  }
  render() {
    return (
      <div className="container">
        {/* Snackbar attributes */}

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          message={<span id="message-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-label="Close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              x
            </IconButton>,
          ]}
        />

        {/* Add Vehicle Modal Window */}

        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* Modal Window Header */}

          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Get Vehicle
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
                      placeholder="Enter Vehicle Number"
                    />
                  </Form.Group>

                  {/* Input Slot No */}
                  <Form.Group controlId="slotNo">
                    <Form.Label>Slot Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="slotNo"
                      required
                      placeholder="Enter an empty slot to Park Vehicle "
                    />
                  </Form.Group>

                  {/* Input Vehicle Type */}
                  <Form.Group controlId="vehicleType">
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Control
                      type="text"
                      name="vehicleType"
                      required
                      placeholder="Enter 2,3,4 or heavy "
                    />
                  </Form.Group>

                  {/* Input Time */}
                  <Form.Group controlId="time">
                    <Form.Label>In Time</Form.Label>
                    <Form.Control
                      type="text"
                      name="time"
                      required
                      placeholder="Enter in-time"
                    />
                  </Form.Group>

                  {/* Input Colour */}
                  <Form.Group controlId="colour">
                    <Form.Label>Colour</Form.Label>
                    <Form.Control
                      type="text"
                      name="colour"
                      required
                      placeholder="Colour of your vehicle"
                    />
                  </Form.Group>

                  {/* Submit Vehicle */}
                  <Form.Group>
                    <Button variant="success" type="Submit">
                      Add Vehicle
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          {/* Modal Window Footer  */}

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
