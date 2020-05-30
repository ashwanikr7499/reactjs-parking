import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
export class DeleteVehModal extends Component
{
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
    fetch("http://localhost:8080/vehicles/exit", {
      method: "DELETE",
      //mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vehicleNo: event.target.vehicleNo.value,
        time: event.target.time.value,
        
      }),
    })
      //console.log(result);

      .then((res) => res.json())
      .then(
        (result) => {
          //alert(result);
          this.setState({ snackbaropen: true, snackbarmsg: result });
        },
        //error in consuming api
        (error) => {
          //alert("Failed");
          this.setState({ snackbaropen: true, snackbarmsg: "Failed" });
        }
      );
    }
    

    render() {
        return (
            <div className="container">
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
                            X
            </IconButton>,
                    ]}
                />
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Delete Vehicle
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="vehicleNo">
                                        <Form.Label>vehicleNo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="vehicleNo"
                                            required disabled
                                            defaultValue={this.props.vehid}
                                            placeholder="vehicleNo"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="time">
                                        <Form.Label>time</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="time"
                                            required
                                            defaultValue={this.props.vehtime}
                                            placeholder="time"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="Submit">
                                            Delete Vehicle
                    </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
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
