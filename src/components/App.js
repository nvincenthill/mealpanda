import React from "react";
// import PropTypes from "prop-types";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import base from "../base";
import data from "../recipes.js";
import { shuffle } from "../helpers";

class App extends React.Component {
  state = {
    randomRecipes: [],
    recipeData: data,
    loading: true,
    menuHidden: true,
    generateButtonHidden: false,
    groceryButtonHidden: true,
    groceryListHidden: true,
  };

  loadMenu = () => {
    this.setState({ menuHidden: false });
    this.setState({ generateButtonHidden: true });
    this.setState({ groceryButtonHidden: false });
  };

  loadGroceryList = () => {
    this.setState({ groceryListHidden: false });
    this.setState({ groceryButtonHidden: true });
  };

  changeRecipe = key => {
    const randomRecipes = this.state.randomRecipes;
    const oldRecipe = randomRecipes[key];
    let newRecipe = oldRecipe;
    while (newRecipe === oldRecipe || randomRecipes.includes(newRecipe)) {
      let i = 0;
      const mixed = shuffle(this.state.recipeData);
      newRecipe = mixed[i];
      i++;
    }

    randomRecipes.splice(key, 1, newRecipe);
    this.setState({ randomRecipes: randomRecipes });
  };

  componentWillMount() {
    // console.log("MOUNTING APP");
  }

  componentDidMount() {
    const randomRecipes = [];
    const mixed = shuffle(this.state.recipeData);
    for (let i = 0; i < 6; i++) {
      randomRecipes.push(mixed[i]);
    }
    this.setState({ randomRecipes: randomRecipes });
    setTimeout(() => this.setState({ loading: false }), 750);
    // console.log("APP MOUNTED!");
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }

    return (
      <React.Fragment>
        <Header
          title="Hey Mel ... What do you want for dinner this week?"
          loadMenu={this.loadMenu}
          loadGroceryList={this.loadGroceryList}
          generateButtonHidden={this.state.generateButtonHidden}
          groceryButtonHidden={this.state.groceryButtonHidden}
          groceryListHidden={this.state.groceryListHidden}
          recipeData={this.state.randomRecipes}
        />
        <Menu
          menuHidden={this.state.menuHidden}
          recipeData={this.state.randomRecipes}
          changeRecipe={this.changeRecipe}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
