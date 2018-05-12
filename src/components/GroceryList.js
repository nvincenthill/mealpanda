import React from "react";
import { createGroceryList, groupBy } from "../helpers";
import {
  // Popover,
  // Tooltip,
  Button
  // Modal
  // OverlayTrigger
  // Well
} from "react-bootstrap";
import { Collapse } from "react-collapse";

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEverything: false,
      showProduce: false,
      showMeat: false,
      showGrains: false,
      showBread: false,
      showDairy: false,
      showBeverages: false,
      showWine: false,
      showCanned: false,
      showFrozen: false,
      showCookies: false,
      showCondiments: false,
      showSpices: false
    };
  }


  checkListItem = () => {
    console.log(this);
  }

  showOrHideEverything = () => {
    let temp = this.state.showEverything;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showEverything: temp });
  };

  showOrHideProduce = () => {
    let temp = this.state.showProduce;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showProduce: temp });
  };

  showOrHideMeat = () => {
    let temp = this.state.showMeat;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showMeat: temp });
  };

  showOrHideGrains = () => {
    let temp = this.state.showGrains;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showGrains: temp });
  };

  showOrHideBread = () => {
    let temp = this.state.showBread;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showBread: temp });
  };

  showOrHideDairy = () => {
    let temp = this.state.showDairy;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showDairy: temp });
  };

  showOrHideBeverages = () => {
    let temp = this.state.showBeverages;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showBeverages: temp });
  };

  showOrHideWine = () => {
    let temp = this.state.showWine;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showWine: temp });
  };

  showOrHideCanned = () => {
    let temp = this.state.showCanned;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showCanned: temp });
  };

  showOrHideFrozen = () => {
    let temp = this.state.showFrozen;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showFrozen: temp });
  };

  showOrHideCookies = () => {
    let temp = this.state.showCookies;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showCookies: temp });
  };

  showOrHideCondiments = () => {
    let temp = this.state.showCondiments;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showCondiments: temp });
  };

  showOrHideSpices = () => {
    let temp = this.state.showSpices;
    if (!temp) {
      temp = true;
    } else {
      temp = false;
    }
    this.setState({ showSpices: temp });
  };

  componentWillMount() {}

  componentWillUpdate() {}

  render() {
    let groceryList = createGroceryList(this.props.randomRecipes);
    let sortedGroceries = groupBy(groceryList, "type");

    let beveragesArray = sortedGroceries["Beverages"];
    let cannedArray = sortedGroceries["Canned Goods"];
    let frozenArray = sortedGroceries["Frozen Foods"];
    let meatArray = sortedGroceries["Meat & Seafood"];
    let produceArray = sortedGroceries["Produce"];
    let condimentsArray = sortedGroceries["Condiments"];
    let breadArray = sortedGroceries["Bread & Bakery"];
    let wineArray = sortedGroceries["Wine, Beer, & Spirits"];
    let cookiesArray = sortedGroceries["Cookies, Snacks, & Candy"];
    let dairyArray = sortedGroceries["Dairy, Eggs, & Cheese"];
    let spicesArray = sortedGroceries["Spices & Herbs"];
    let grainsArray = sortedGroceries["Grains, Pastas, & Sides"];

    // let groceriesArray = [
    //   beveragesArray,
    //   cannedArray,
    //   frozenArray,
    //   meatArray,
    //   produceArray,
    //   condimentsArray,
    //   breadArray,
    //   wineArray,
    //   cookiesArray,
    //   dairyArray,
    //   spicesArray,
    //   grainsArray
    // ];

    // let cleanGroceriesArray = groceriesArray.filter(function(val) {
    //   return val !== undefined;
    // });

      groceryList = groceryList.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row" onClick={this.checkListItem}>
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));

    if (spicesArray) {
      spicesArray = spicesArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }

    if (beveragesArray) {
      beveragesArray = beveragesArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }

    if (cannedArray) {
      cannedArray = cannedArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }

    if (frozenArray) {
      frozenArray = frozenArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }
    if (meatArray) {
      meatArray = meatArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }

    if (produceArray) {
      produceArray = produceArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }

    if (condimentsArray) {
      condimentsArray = condimentsArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }
    if (breadArray) {
      breadArray = breadArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }
    if (wineArray) {
      wineArray = wineArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }
    if (cookiesArray) {
      cookiesArray = cookiesArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }
    if (dairyArray) {
      dairyArray = dairyArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }
    if (grainsArray) {
      grainsArray = grainsArray.map(key => (
        <tr key={`${key.name}`} className="grocery-list-table-row">
          <td key={`${key.quantity}2`}>{key.quantity}</td>
          <td key={`${key.uom}3`}>{key.uom}</td>
          <td key={`${key.name}1`}>{key.name}</td>
        </tr>
      ));
    }

    // let header = (
    //   <tr className="grocery-list-table-header">
    //     <th>Quantity</th>
    //     <th>Units</th>
    //     <th>Name</th>
    //   </tr>
    // );

    let empty = (
      <tr className="grocery-list-table-empty">
        <td>n/a</td>
        <td>n/a</td>
        <td>n/a</td>
      </tr>
    );

    return (
      <React.Fragment>
      <div className="grocery-list-button-container">
        <Button
          className="grocery-list-button"
          onClick={this.showOrHideEverything}
          bsStyle="default"
          bsSize="large"
          block
        >
          Show me everything!
        </Button>
        <Collapse isOpened={this.state.showEverything}>
          <div className="tempclass">
            <div>
              <table className="grocery-list-table" align="center">
                <tbody className="grocery-list-table-body" align="left">
                  {groceryList}
                </tbody>
              </table>
            </div>
          </div>
        </Collapse>
      </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideProduce}
            bsStyle="default"
            bsSize="large"
            block
          >
            Produce
          </Button>
          <Collapse isOpened={this.state.showProduce}>
            <div className="tempclass">
              <div>
                <table className="grocery-list-table" align="center">
                  <tbody className="grocery-list-table-body" align="left">
                    {produceArray ? produceArray : empty}
                  </tbody>
                </table>
              </div>
            </div>
          </Collapse>
        </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideMeat}
            bsStyle="default"
            bsSize="large"
            block
          >
            Meat & Seafood
          </Button>
          <Collapse isOpened={this.state.showMeat}>
            <table className="grocery-list-table" align="center">
              <tbody className="grocery-list-table-body" align="left">
                {meatArray ? meatArray : empty}
              </tbody>
            </table>
          </Collapse>
        </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideGrains}
            bsStyle="default"
            bsSize="large"
            block
          >
            Grains, Pastas, & Sides
          </Button>
          <Collapse isOpened={this.state.showGrains}>
            <table className="grocery-list-table" align="center">
              <tbody className="grocery-list-table-body" align="left">
                {grainsArray ? grainsArray : empty}
              </tbody>
            </table>
          </Collapse>
        </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideBread}
            bsStyle="default"
            bsSize="large"
            block
          >
            Bread & Bakery
          </Button>
          <Collapse isOpened={this.state.showBread}>
            <table className="grocery-list-table" align="center">
              <tbody className="grocery-list-table-body" align="left">
                {breadArray ? breadArray : empty}
              </tbody>
            </table>
          </Collapse>
        </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideDairy}
            bsStyle="default"
            bsSize="large"
            block
          >
            Dairy, Eggs, & Cheese
          </Button>
          <Collapse isOpened={this.state.showDairy}>
            <table className="grocery-list-table" align="center">
              <tbody className="grocery-list-table-body" align="left">
                {dairyArray ? dairyArray : empty}
              </tbody>
            </table>
          </Collapse>
        </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideBeverages}
            bsStyle="default"
            bsSize="large"
            block
          >
            Beverages
          </Button>
          <Collapse isOpened={this.state.showBeverages}>
            <table className="grocery-list-table" align="center">
              <tbody className="grocery-list-table-body" align="left">
                {beveragesArray ? beveragesArray : empty}
              </tbody>
            </table>
          </Collapse>
        </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideWine}
            bsStyle="default"
            bsSize="large"
            block
          >
            Wine, Beer, & Spirits
          </Button>
          <Collapse isOpened={this.state.showWine}>
            <table className="grocery-list-table" align="center">
              <tbody className="grocery-list-table-body" align="left">
                {wineArray ? wineArray : empty}
              </tbody>
            </table>
          </Collapse>
        </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideCanned}
            bsStyle="default"
            bsSize="large"
            block
          >
            Canned Goods
          </Button>
          <Collapse isOpened={this.state.showCanned}>
            <table className="grocery-list-table" align="center">
              <tbody className="grocery-list-table-body" align="left">
                {cannedArray ? cannedArray : empty}
              </tbody>
            </table>
          </Collapse>
        </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideFrozen}
            bsStyle="default"
            bsSize="large"
            block
          >
            Frozen Foods
          </Button>
          <Collapse isOpened={this.state.showFrozen}>
            <table className="grocery-list-table" align="center">
              <tbody className="grocery-list-table-body" align="left">
                {frozenArray ? frozenArray : empty}
              </tbody>
            </table>
          </Collapse>
        </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideCookies}
            bsStyle="default"
            bsSize="large"
            block
          >
            Cookies, Snacks, & Candy
          </Button>
          <Collapse isOpened={this.state.showCookies}>
            <table className="grocery-list-table" align="center">
              <tbody className="grocery-list-table-body" align="left">
                {cookiesArray ? cookiesArray : empty}
              </tbody>
            </table>
          </Collapse>
        </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideCondiments}
            bsStyle="default"
            bsSize="large"
            block
          >
            Condiments
          </Button>
          <Collapse isOpened={this.state.showCondiments}>
            <table className="grocery-list-table" align="center">
              <tbody className="grocery-list-table-body" align="left">
                {condimentsArray ? condimentsArray : empty}
              </tbody>
            </table>
          </Collapse>
        </div>
        <div className="grocery-list-button-container">
          <Button
            className="grocery-list-button"
            onClick={this.showOrHideSpices}
            bsStyle="default"
            bsSize="large"
            block
          >
            Spices & Herbs
          </Button>
          <Collapse isOpened={this.state.showSpices}>
            <table className="grocery-list-table" align="center">
              <tbody className="grocery-list-table-body" align="left">
                {spicesArray ? spicesArray : empty}
              </tbody>
            </table>
          </Collapse>
        </div>
        </React.Fragment>
    );
  }
}

export default GroceryList;
