import React from "react";
// import PropTypes from "prop-types";
import SignInModal from "./SignInModal";
import { Button } from "react-bootstrap";
import { Collapse } from "react-collapse";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Footer extends React.Component {
  render() {
    const logOutButton = (
      <Button
        id="logout-button"
        bsStyle="danger"
        bsSize="large"
        onClick={this.props.logOut}
      >
        {" "}
        Log Out{" "}
      </Button>
    );
    const signInModal = <SignInModal authenticate={this.props.authenticate} />;
    return (
      <Collapse isOpened={!this.props.footerHidden}>
        <ReactCSSTransitionGroup
          transitionName="footer-animation"
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={3000}
        >
          <div className="no-margin">
            <div className="footer-buttons">
              {this.props.userAuthenticated ? null : signInModal}
              {this.props.userAuthenticated ? logOutButton : null}
            </div>
            <div className="divider-small" />
            <h4 className="footer">
              {" "}
              Created in <b> 2018 </b> by &nbsp;
              <br />
              <b>
                <a className="link" href="https://nvincenthill.github.io/">
                  Nicholas Vincent-Hill &nbsp;
                </a>
              </b>
              & &nbsp;
              <b>
                <a className="link" href="https://avhdesign.win/">
                  Alexander Vincent-Hill &nbsp;
                </a>{" "}
              </b>
            </h4>
          </div>
        </ReactCSSTransitionGroup>
      </Collapse>
    );
  }
}

export default Footer;
