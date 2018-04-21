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
    const letThePandaDecide = (
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

    const title = (
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

    const ingredients = this.props.groceryButtonHidden ? null : (
      <GroceryListModal
        randomRecipes={this.props.randomRecipes}
        email={this.props.email}
      />
    );

    const signIn = (
      <Collapse
        isOpened={!this.props.userAuthenticated && this.props.footerHidden}
      >
        <div className="no-margin">
          <div>
            <SignInModal authenticate={this.props.authenticate} />
          </div>
        </div>
      </Collapse>
    );

    const pandaLogo = (
      <div className="header-logo-container">
        <Collapse isOpened={this.props.footerHidden}>
            <img
              onClick={this.props.returnToMain}
              id="logo-header"
              src="/images/mealpanda.png"
              alt="logo"
            />
        </Collapse>
      </div>
    );

    const logOutButton = (
      <Button
        id="logOutButton"
        bsStyle="danger"
        bsSize="large"
        onClick={this.props.logOut}
      >
        Log Out
      </Button>
    );

    return (
      <div className="jumbotron">
        <div className="flex-title">{title}</div>

        <div className="inflexction">
          {pandaLogo} {letThePandaDecide}{" "}
          <div className="aux">
            {" "}
            {ingredients}{" "}
            {this.props.userAuthenticated && this.props.titleHidden
              ? logOutButton
              : signIn}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
