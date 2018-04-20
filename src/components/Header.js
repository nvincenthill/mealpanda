import React from "react";
import GroceryListModal from "./GroceryListModal";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Collapse } from "react-collapse";
import SignInModal from "./SignInModal";

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
        <ReactCSSTransitionGroup
          transitionName="generate-button-animation"
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={3000}
        >
          <div className="generate-button-container">
            <Button
              onClick={this.props.loadMenu}
              type="submit"
              id="generate-button-new"
            >
              {" "}
              Let the <span id="generate-button-new-panda">panda</span>{" "}
              decide{" "}
            </Button>
          </div>
        </ReactCSSTransitionGroup>
      </Collapse>
    );

    const oldTitle = (
      <Collapse isOpened={!this.props.titleHidden}>
          <ReactCSSTransitionGroup
            transitionName="title-animation"
            transitionAppear={true}
            transitionAppearTimeout={2000}
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={2000}
          >
            <h1 id="maintitle">
              Hey Mel ... <br />What do you want for dinner this week?
            </h1>
          </ReactCSSTransitionGroup>
      </Collapse>
    );

    const groceryListModal = (this.props.groceryButtonHidden ? null : (
            <GroceryListModal randomRecipes={this.props.randomRecipes} />
          ))

    const signInModal = (
        <Collapse isOpened={!this.props.userAuthenticated && this.props.titleHidden}>
          <div className="no-margin">
            <div>
              <SignInModal authenticate={this.props.authenticate} />
            </div>
          </div>
        </Collapse>
      )

    return (
      <div className="jumbotron">
        {oldTitle}
        <div className="divider">{generateButton}</div>
        <div>
        {groceryListModal}
        </div>
        <div> {this.props.userAuthenticated ? null : signInModal} </div>
      </div>
    );
  }
}

export default Header;
