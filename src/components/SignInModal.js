import React from "react";
import {
  // Popover,
  // Tooltip,
  Button,
  Modal,
  // OverlayTrigger,
  Well
} from "react-bootstrap";

class SignInModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentWillMount() {
    // console.log("MOUNTING SIGN IN MODAL");
  }

  render() {
    const signInButtonHeader = (
      <div>
        <Button
          id="signInButton"
          bsSize="large"
          bsStyle="success"
          onClick={this.handleShow}
        >
          Sign in
        </Button>
      </div>
      )

    const signInButtonFooter = (
      <div>
        <Button
          id="signInButton-footer"
          bsSize="large"
          bsStyle="success"
          onClick={this.handleShow}
        >
          Sign in
        </Button>
      </div>
      )

    return (
      <div>
      {this.props.footerHidden ? signInButtonHeader : signInButtonFooter}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <div className="sign-in-modal-logo-container">
              <img id="logo" src="/images/mealpanda.png" alt="logo" />
            </div>
          </Modal.Header>
          <Modal.Body>
            <Button
              id="signInButton-modal"
              bsStyle="success"
              bsSize="large"
              onClick={() => this.props.authenticate("Google")}
            >
              Sign in
            </Button>
            <p className="sign-in-message">
              Sign in to save your menu and grocery list.
            </p>
            <hr />

            <h4>Privacy policy</h4>
            <Well>
              We respect your privacy, do not tolerate spam, and will never
              sell, rent, lease or give away your information (name, address,
              email, etc.) to any third party. We will not send you unsolicited
              emails or collect your personal information for commercial
              purposes.
            </Well>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default SignInModal;
