import React from "react";
import GroceryListModal from "./GroceryListModal";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Collapse } from "react-collapse";
import SignInModal from "./SignInModal";
import MealPandaButton from "./MealPandaButton";

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
    const title = (
      <Collapse isOpened={!this.props.titleHidden}>
        <ReactCSSTransitionGroup
          transitionName="title-animation"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={2000}
        >
        <div className="no-margin">
          <h1 id="maintitle">
            Hey Mel ... <br />What do you want for dinner this week?
          </h1>
        </div>
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
        <div>{title}</div>

        <div className="inflexction">
          {pandaLogo}{" "}
          <MealPandaButton
            router={this.props.router}
            generateButtonHidden={this.props.generateButtonHidden}
            pandaMessage={this.props.pandaMessage}
          />
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
