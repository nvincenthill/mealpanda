import React from "react";
import MapContainer from "./MapContainer";

import {
  Button,
  Modal
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
    const instructionsOrDirections =
      this.props.recipeData["@type"] === "Recipe"
        ? "Instructions"
        : "Directions";
    const name = this.props.recipeData.name;
    return (
      <div>
        <Button
        id="instructions-button"
          className="btn btn-default"
          bsSize="large"
          onClick={this.handleShow}
        >
          {instructionsOrDirections}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="recipe-modal-title">{instructionsOrDirections}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <a href={this.props.recipeData.website}><h4>{name}</h4></a>
            <p>{this.props.recipeData.description}</p>
            <MapContainer recipeData={this.props.recipeData}/>
            <hr />
            <h4>Address</h4>
            <p>{this.props.recipeData.address}</p>
          </Modal.Body>
          <Modal.Footer className="recipe-modal-footer">
            {" "}
            <Button className="btn-modal-close" onClick={this.handleClose}>
              Close
            </Button>{" "}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default RestaurantModal;
