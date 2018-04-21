import React from "react";
import { mandrill } from "node-mandrill";
import {
  // Popover,
  // Tooltip,
  Button,
  Modal
  // OverlayTrigger
  // Well
} from "react-bootstrap";

class Email extends React.Component {
  state = {};

  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {

    return <Button className="btn btn-default disabled" onClick={this.props.email} disabled>Email me my shopping list - coming soon</Button>;
  }
}
export default Email;
