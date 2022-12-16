import React from "react";
import GroceryListModal from "./GroceryListModal";
import SignInModal from "./SignInModal";
import MealPandaButton from "./MealPandaButton";

import {
  Button
} from "react-bootstrap";

class Header extends React.Component {
  render() {
    const title = (
      <Collapse isOpened={!this.props.titleHidden}>
        <div className="no-margin">
          <h1 id="maintitle">
            Hey Mel ... <br />What do you want for dinner this week?
          </h1>
        </div>
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
            <SignInModal footerHidden={this.props.footerHidden} authenticate={this.props.authenticate} />
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
