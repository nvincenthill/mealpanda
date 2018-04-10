import React from "react";
import PropTypes from "prop-types";
import MenuItems from "./MenuItems";
import base from "../base";

class App extends React.Component {
  state = {
    menu: {},
    groceryList: {}
  };

  static propTypes = {
    match: PropTypes.object
  };

  // componentDidMount() {
  //   const { params } = this.props.match;
  //   // first reinstate our localStorage
  //   const localStorageRef = localStorage.getItem(params.storeId);
  //   if (localStorageRef) {
  //     this.setState({ order: JSON.parse(localStorageRef) });
  //   }

  //   this.ref = base.syncState(`${params.storeId}/fishes`, {
  //     context: this,
  //     state: "fishes"
  //   });
  // }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  // addFish = fish => {
  //   // 1. Take a copy of the existing state
  //   const fishes = { ...this.state.fishes };
  //   // 2. Add our new fish to that fishes variable
  //   fishes[`fish${Date.now()}`] = fish;
  //   // 3. Set the new fishes object to state
  //   this.setState({ fishes });
  // };

  // updateFish = (key, updatedFish) => {
  //   // 1. Take a copy of the current state
  //   const fishes = { ...this.state.fishes };
  //   // 2. Update that state
  //   fishes[key] = updatedFish;
  //   // 3. Set that to state
  //   this.setState({ fishes });
  // };

  // deleteFish = key => {
  //   // 1. take a copy of state
  //   const fishes = { ...this.state.fishes };
  //   // 2. update the state
  //   fishes[key] = null;
  //   // 3.  update state
  //   this.setState({ fishes });
  // };

  // loadSampleFishes = () => {
  //   this.setState({ fishes: sampleFishes });
  // };

  // addToOrder = key => {
  //   // 1. take a copy of state
  //   const order = { ...this.state.order };
  //   // 2. Either add to the order, or update the number in our order
  //   order[key] = order[key] + 1 || 1;
  //   // 3. Call setState to update our state object
  //   this.setState({ order });
  // };

  // removeFromOrder = key => {
  //   // 1. take a copy of state
  //   const order = { ...this.state.order };
  //   // 2. remove that itemf from order
  //   delete order[key];
  //   // 3. Call setState to update our state object
  //   this.setState({ order });
  // };

  render() {
    return (
      <div id="mealweek" className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2.4 col-sm-12 col-xs-12">
          <h2>Menu items go here!</h2>
          <MenuItems />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
