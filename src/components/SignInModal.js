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

  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );
    // const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        <Button bsSize="large" onClick={this.handleShow}>
          Sign in with Google
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              <p>Plan smarter. Eat better.</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button
              className="signinbtn"
              bsStyle="success"
              bsSize="large"
              onClick={this.handleShow}
            >
              Sign in
            </Button>
            <p className="sign-in-message">Sign in to save your menu and grocery list.</p>
            <hr />

            <h4>Privacy policy</h4>
            <Well>
              We respect your privacy, do not tolerate spam, and will never
              sell, rent, lease or give away your information (name, address,
              email, etc.) to any third party. We will not send you unsolicited
              emails or collect your personal information for commercial purposes.
            </Well>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default SignInModal;
