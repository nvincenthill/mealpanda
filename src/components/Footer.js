import React from "react";
// import PropTypes from "prop-types";
import SignInModal from "./SignInModal";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <h4>
            {" "}
            Created by &nbsp;
            <b>
              <a className="myname" href="https://nvincenthill.github.io/">
                Nicholas Vincent-Hill &nbsp;
              </a>
            </b>
            in &nbsp;
            <b>2018</b>
          </h4>
          <SignInModal />
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
