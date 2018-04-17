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
          alt="Smiley face"
          height="42"
          width="42"
        />
      </div>
    );
  }
}
export default MealPanda;
