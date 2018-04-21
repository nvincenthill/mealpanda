import React from "react";
import { Collapse } from "react-collapse";
import { Button } from "react-bootstrap";

class MealPandaButton extends React.Component {
  state = {};

  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {
    // console.log("UPDATED");
  }
  componentWillUnmount() {}
  render() {
    return (
      <Collapse
        isOpened={!this.props.generateButtonHidden}
        springConfig={{ stiffness: 100, damping: 10, precision: 20 }}
      >
        <div className="generate-button-container">
          <Button
            onClick={this.props.router}
            type="submit"
            id="generate-button-new"
          >
            {this.props.pandaMessage}
          </Button>
        </div>
      </Collapse>
    );
  }
}

export default MealPandaButton;
