import React from "react";
import { Collapse } from "react-collapse";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class MealPanda extends React.Component {
  componentWillMount() {
    // console.log("MOUNTING PANDA");
  }

  componentDidMount() {
    // console.log("PANDA MOUNTED!");
  }

  componentDidUpdate() {
    // console.log("PANDA CHANGED!");
  }

  componentWillUnmount() {
    // console.log("PANDA KILLED!");
  }

  render() {
    let pandaTop = <img id="logo" src="/images/mealpanda.png" alt="logo"/>;

    return (
      <Collapse isOpened={!this.props.pandaHidden} springConfig={{stiffness: 180, damping: 15}}>
      <ReactCSSTransitionGroup
        transitionName="logo-animation"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <div className="logo-container">{pandaTop}</div>
        </ReactCSSTransitionGroup>
      </Collapse>
    );
  }
}
export default MealPanda;
