import React from "react";
import { createGroceryList } from "../helpers";

class GroceryList extends React.Component {
  render() {
    let groceryList = createGroceryList(this.props.recipeData);
    return <p> Grocery List Here! </p>;
  }
}

export default GroceryList;
