import React from "react";
import { createGroceryList } from "../helpers";

class GroceryList extends React.Component {
  render() {
    let groceryList = createGroceryList(this.props.recipeData);
    return (
      <div className="grocery-list">
        <h2 className="grocery-list-header">Grocery List</h2>

        <table className="grocery-list-table" align="center">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Units</th>
            </tr>
            <tr>
              <td>Example Name</td>
              <td>Example Quantity</td>
              <td>Example Units</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default GroceryList;
