import React from "react";
import GroceryListModal from "./GroceryListModal";

class Header extends React.Component {
  componentWillMount() {
    // console.log("MOUNTING HEADER");
  }

  componentDidMount() {
    // console.log("HEADER MOUNTED!")
  }

  render() {
    const generateButton = (
      <p>
        <button
          onClick={this.props.loadMenu}
          type="submit"
          className="btn btn-danger btn-lg"
          id="generate"
        >
          {" "}
          Let the robots decide...{" "}
        </button>
      </p>
    );

    const groceryListButton = (
      <p>
        <button
          onClick={this.props.loadGroceryList}
          type="submit"
          className="btn btn-success btn-lg"
          id="ibutton"
        >
          {" "}
          What do we need?{" "}
        </button>
      </p>
    );

    // const HideGroceryListButton = (
    //   <p>
    //     <button type="submit" className="btn btn-hide btn-lg" id="hbutton" onClick={this.props.hideGroceryList}>
    //       {" "}
    //       Hide Grocery List{" "}
    //     </button>
    //   </p>
    // );

    return (
      <div className="jumbotron">
        <h1 id="maintitle">{this.props.title}</h1>
        {this.props.generateButtonHidden ? null : generateButton}
        {/* <div>{this.props.groceryButtonHidden ? null : groceryListButton}</div> */}

        <div> 
          {this.props.groceryButtonHidden ? null : (
            <GroceryListModal randomRecipes={this.props.randomRecipes} />
          )}
        </div>
        {/* <div>
          {this.props.HideGroceryListButtonHidden
            ? null
            : HideGroceryListButton}
        </div> */}
      </div>
    );
  }
}

export default Header;
