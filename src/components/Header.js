import React from "react";
import GroceryListModal from "./GroceryListModal";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Collapse } from "react-collapse";

import {
  // Popover,
  // Tooltip,
  Button
  // Modal
  // OverlayTrigger
  // Well
} from "react-bootstrap";

class Header extends React.Component {
  componentWillMount() {
    // console.log("MOUNTING HEADER");
  }

  componentDidMount() {
    // console.log("HEADER MOUNTED!")
  }

  render() {
    const generateButton = (
      <Collapse isOpened={!this.props.generateButtonHidden}>
        <div className="generate-button-container">
          <p>
            <Button
              onClick={this.props.loadMenu}
              type="submit"
              className="btn-success btn-block"
              bsSize="large"
            >
              {" "}
              Let the panda decide...{" "}
            </Button>
          </p>
        </div>
      </Collapse>
    );

    return (
      <div className="jumbotron">
        <Collapse isOpened={!this.props.titleHidden}>
          <ReactCSSTransitionGroup
            transitionName="title-animation"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <h1 id="maintitle">
              Hey Mel ... <br />What do you want for dinner this week?
            </h1>
          </ReactCSSTransitionGroup>
        </Collapse>
          <div className="generate-button-container">
          {generateButton}
          </div>
          <div>
            {this.props.groceryButtonHidden ? null : (
              <GroceryListModal randomRecipes={this.props.randomRecipes} />
            )}
          
        </div>
      </div>
    );
  }
}

export default Header;
