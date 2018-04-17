import React from "react";

class MealPanda extends React.Component {
  componentWillMount() {
    // console.log("MOUNTING HEADER");
  }

  componentDidMount() {
    // console.log("HEADER MOUNTED!")
  }

  render() {
    return (
      <div className="logo-container">
        <img
          id="logo"
          src="/images/mealpanda.png"
        />
      </div>
    );
  }
}
export default MealPanda;
