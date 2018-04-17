import React from "react";
// import PropTypes from "prop-types";
import SignInModal from "./SignInModal";
import { Button } from "react-bootstrap";
import { Collapse } from "react-collapse";

class Footer extends React.Component {
  render() {
    const logOutButton = (
      <Button bsSize="large" onClick={this.props.logOut}>
        {" "}
        Log Out{" "}
      </Button>
    );
    const signInModal = <SignInModal authenticate={this.props.authenticate} />;
    return (
      <Collapse isOpened={!this.props.footerHidden}>
        <div className="footer">
          <h4>
            {" "}
            Created by &nbsp;
            <b>
              <a className="myname" href="https://nvincenthill.github.io/">
                Nicholas Vincent-Hill &nbsp;
              </a>
            </b>
            and &nbsp;
            <b>
              <a className="myname" href="https://avhdesign.win/">
                Alexander Vincent-Hill &nbsp;
              </a>
            </b> 
            in &nbsp; 
            <b>2018</b>
          </h4>
          {this.props.userAuthenticated ? null : signInModal}
          {this.props.userAuthenticated ? logOutButton : null}
        </div>
      </Collapse>
    );
  }
}

export default Footer;
