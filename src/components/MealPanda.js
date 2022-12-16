import React from "react";

class MealPanda extends React.Component {
  render() {
    let pandaTop = <img id="logo" src="/images/mealpanda.png" alt="logo"/>;

    return (
      <Collapse isOpened={!this.props.pandaHidden} springConfig={{stiffness: 180, damping: 15}}>
        <div className="logo-container">{pandaTop}</div>
      </Collapse>
    );
  }
}
export default MealPanda;
