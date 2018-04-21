import React from "react";

import {
  // Grid,
  Col,
  Row,
  // Popover,
  // Tooltip,
  Button,
  Modal
  // OverlayTrigger
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
    const instructionsOrDirections =
      this.props.recipeData["@type"] === "Recipe"
        ? "Instructions"
        : "Directions";
    const name = this.props.recipeData.name;

    const recipeInstructions = this.props.recipeData.recipeInstructions.map(
      key => <li key={key}>{key}</li>
    );
    
    let recipeIngredients = this.props.recipeData.recipeIngredient.map(key => (
      <tr key={`${key.name}`} className="ingredients-list-table-row">
        <td key={`${key.quantity}5`}>{key.quantity}</td>
        <td key={`${key.uom}6`}>{key.uom}</td>
        <td key={`${key.name}4`}>{key.name}</td>
      </tr>
    ));

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
            <Modal.Title className="recipe-modal-title">{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
            <Col className="recipe-modal-picture-container" xs={12} sm={12} md={4}>
              <img
                className="recipe-modal-picture"
                src={`/images/${this.props.recipeData.image}`}
                alt={this.props.recipeData.name}
              />
            </Col>
              <Col xs={12} sm={12} md={4}>
                <div className="ingredients-list">
                  <table className="ingredients-list-table" align="center">
                    <tbody className="ingredients-list-table-body" align="left">
                      {recipeIngredients}
                    </tbody>
                  </table>
                </div>
              </Col>
              
            </Row>
            <hr />
            <h2 className="instructions-list-header">Instructions</h2>
            <div className="recipe-modal-instructions">
              <ol>{recipeInstructions}</ol>
            </div>
            <div className="recipe-yield"> 
              {`Yield: ${this.props.recipeData.recipeYield}`}
            </div>
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

export default RecipeModal;
