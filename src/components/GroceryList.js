import React from "react";
import { createGroceryList } from "../helpers";

class GroceryList extends React.Component {
  render() {
    let groceryList = createGroceryList(this.props.randomRecipes);
    let row = groceryList.map(key => (
      <tr key={`${key.name}`} className="grocery-list-table-row">
        <td key={`${key.quantity}2`}>{key.quantity}</td>
        <td key={`${key.uom}3`}>{key.uom}</td>
        <td key={`${key.name}1`}>{key.name}</td>
      </tr>
    ));

    return (
      <div className="grocery-list">
        <table className="grocery-list-table" align="center">
          <tbody className="grocery-list-table-body" align="left">
            <tr className="grocery-list-table-header">
              <th>Quantity</th>
              <th>Units</th>
              <th>Name</th>
            </tr>
            {row}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GroceryList;
