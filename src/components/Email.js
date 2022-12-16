import React from "react";
import {
  Button,
} from "react-bootstrap";

class Email extends React.Component {
  state = {};
  render() {
    return <Button className="btn btn-default disabled" onClick={this.props.email} disabled>Email me my shopping list - coming soon</Button>;
  }
}
export default Email;
