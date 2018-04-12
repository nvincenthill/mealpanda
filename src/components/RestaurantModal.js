import React from "react";
// import MapContainer from "./MapContainer";

import {
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger
  // Well
} from "react-bootstrap";

class RestaurantModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    const instructionsOrDirections =
      this.props.recipeData["@type"] === "Recipe"
        ? "Instructions"
        : "Directions";
    const name = this.props.recipeData.name;
    return (
      <div>
        <Button
          className="btn btn-default"
          bsSize="large"
          onClick={this.handleShow}
        >
          {instructionsOrDirections}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{instructionsOrDirections}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{name}</h4>
            <p>{this.props.recipeData.description}</p>
            <div />
            <h4>Popover in a modal</h4>
            <p>
              there is a{" "}
              <OverlayTrigger overlay={popover}>
                <a href="#popover">popover</a>
              </OverlayTrigger>{" "}
              here
            </p>

            <h4>Tooltips in a modal</h4>
            <p>
              there is a{" "}
              <OverlayTrigger overlay={tooltip}>
                <a href="#tooltip">tooltip</a>
              </OverlayTrigger>{" "}
              here
            </p>

            <hr />
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    );
  }
}

export default RestaurantModal;
