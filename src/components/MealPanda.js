import React from "react";

class MealPanda extends React.Component {
  componentWillMount() {
    console.log("MOUNTING PANDA");
  }

  componentDidMount() {
    console.log("PANDA MOUNTED!");
  }

  componentDidUpdate() {
    console.log("PANDA CHANGED!");
  }

  componentWillUnmount() {
    console.log("PANDA KILLED!");
  }

  render() {
    let panda = <img id="logo" src="/images/mealpanda.png" alt="logo" />;

    return <div className="logo-container">{panda}</div>;
  }
}
export default MealPanda;
