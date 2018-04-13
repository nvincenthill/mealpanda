import React from "react";

import {
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger
  // Well
} from "react-bootstrap";

class RecipeModal extends React.Component {
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

    const recipeInstructions = this.props.recipeData.recipeInstructions.map(
      key => <li key={key}>{key}</li>
    );

    const recipeIngredients = this.props.recipeData.recipeIngredient.map(
      key => <li key={key}>{key}</li>
    );

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
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Ingredients</h4>
            <h4>Instructions</h4>
            <div className="recipe-modal-instructions">
              {recipeInstructions}
            </div>

            <hr />
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    );
  }
}

export default RecipeModal;
