import React from "react";
import SignInModal from "./SignInModal";
import { Button } from "react-bootstrap";
import { Collapse } from "react-collapse";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Footer extends React.Component {
  render() {
    const logOutButton = (
      <Button
        id="logOutButtonFooter"
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
              {this.props.userAuthenticated ? logOutButton : signInModal}
            </div>
            <div className="divider-small" />
            <h4 className="footer">
              {" "}
              Created in <b> 2018 </b> by &nbsp;
              <br />
                <a className="link" href="https://nvincenthill.github.io/">
                  Nicholas Vincent-Hill&nbsp;
                </a>
                <br />
            </h4>
          </div>
        </ReactCSSTransitionGroup>
      </Collapse>
    );
  }
}

export default Footer;
