import React from "react";
import { Collapse } from "react-collapse";
import { Button } from "react-bootstrap";

class MealPandaButton extends React.Component {
  state = {};
  render() {
    return (
      <div className="generate-button-container">
        <Collapse
          isOpened={!this.props.generateButtonHidden}
          springConfig={{ stiffness: 100, damping: 20, precision: 20 }}
        >
          <Button
            onClick={this.props.router}
            type="submit"
            id="generate-button-new"
          >
            {this.props.pandaMessage}
          </Button>
        </Collapse>
      </div>
    );
  }
}

export default MealPandaButton;
