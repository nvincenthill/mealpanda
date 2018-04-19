import React from "react";
import GroceryList from "./GroceryList";


import {
  // Popover,
  // Tooltip,
  Button,
  Modal
  // OverlayTrigger
  // Well
} from "react-bootstrap";

class GroceryListModal extends React.Component {
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
    return (
      <div>
        <Button
          className="show-grocery-list"
          bsSize="large"
          onClick={this.handleShow}
        >
          What do we need?
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ingredients List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <GroceryList randomRecipes={this.props.randomRecipes} />
          </Modal.Body>
          <Modal.Footer className="recipe-modal-footer"> 
          <div className="export-grocery-list"> 
            Download | Email
          </div>
          <Button className="btn-modal-close" onClick={this.handleClose}>Close</Button> </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default GroceryListModal;
