import React from "react";
import Menu from "./Menu";
import MealPanda from "./MealPanda";
import Header from "./Header";
import Footer from "./Footer";
import data from "../recipes.js";
import { shuffle } from "../helpers";

class App extends React.Component {
  state = {
    randomRecipes: [],
    recipeData: data,
    menuHidden: true,
    generateButtonHidden: false,
    groceryButtonHidden: true,
    pandaHidden: false,
    titleHidden: false,
    footerHidden: false,
    HideGroceryListButtonHidden: true,
    groceryListHidden: true,
    userAuthenticated: false,
    uid: null,
    pandaMessage: "Let the panda decide",
    isChanging: false,
    activeIndex: null
  };

  // display menu
  loadMenu = () => {
    setTimeout(this.showMenu, 750);
    this.setState({
      groceryButtonHidden: false,
      footerHidden: true,
      titleHidden: true,
      pandaHidden: true,
      pandaMessage: "Reawaken the meal panda"
    });
  };

  // reset state to fresh page load state
  returnToMain = () => {
    this.setState({
      pandaHidden: false,
      titleHidden: false,
      menuHidden: true,
      generateButtonHidden: false,
      groceryButtonHidden: true,
      footerHidden: false,
      pandaMessage: "Let the panda decide"
    });
  };

  showMenu = () => {
    this.setState({ menuHidden: false });
  };

  loadGroceryList = () => {
    this.setState({
      groceryListHidden: false,
      groceryButtonHidden: true,
      HideGroceryListButtonHidden: false
    });
  };

  hideGroceryList = () => {
    this.setState({
      groceryListHidden: true,
      groceryButtonHidden: false,
      HideGroceryListButtonHidden: true
    });
  };

  changeRecipe = key => {
    const mixed = shuffle(this.state.recipeData);
    const randomRecipes = this.state.randomRecipes;
    const oldRecipe = randomRecipes[key];
    let newRecipe = oldRecipe;
    let usedNames = [];

    for (let j = 0; j < this.state.randomRecipes.length; j++) {
      usedNames.push(this.state.randomRecipes[j].name);
    }

    for (let k = 0; k < mixed.length; k++) {
      newRecipe = mixed[k];
      if (!usedNames.includes(newRecipe.name)) {
        break;
      }
    }

    let newRecipes = randomRecipes;
    newRecipes[key] = newRecipe;
    this.setState({
      randomRecipes: newRecipes
    });
  };

  regenerate = () => {
    this.returnToMain();
    this.setState({ pandaMessage: "Pawstulating new meals..." });
    for (let i = 0; i < 6; i++) {
      this.changeRecipe(i);
    }
    setTimeout(this.loadMenu, 1500);
  };

  handleClick = index => {
    this.setState({ activeIndex: index, isChanging: true });
    setTimeout(() => this.changeClass(index), 800);
  };

  changeClass = index => {
    this.changeRecipe(index);
    this.setState({ isChanging: false, activeIndex: null });
  };

  generateRandomRecipes = () => {
    const randomRecipes = [];
    const mixed = shuffle(this.state.recipeData);
    for (let i = 0; i < 6; i++) {
      randomRecipes.push(mixed[i]);
    }
    this.setState({ randomRecipes: randomRecipes });
  };

  router = () => {
    if (this.state.menuHidden) {
      this.loadMenu();
    } else {
      this.regenerate();
    }
  };

  componentWillMount() {
    let sortedIngredients = this.state.recipeData;
    for (let j = 0; j < sortedIngredients.length; j++) {
      sortedIngredients[j].recipeIngredient.sort(function(a, b) {
        return a.type > b.type ? 1 : b.type > a.type ? -1 : 0;
      });
    }
    this.setState({ recipeData: sortedIngredients });
  }

  componentDidMount() {
    this.generateRandomRecipes();
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const pandaLogo = <MealPanda pandaHidden={this.state.pandaHidden} />;
    return (
      <React.Fragment>
        {pandaLogo}
        <Header
          title="Hey Mel ... What do you want for dinner this week?"
          loadMenu={this.loadMenu}
          loadGroceryList={this.loadGroceryList}
          generateButtonHidden={this.state.generateButtonHidden}
          groceryButtonHidden={this.state.groceryButtonHidden}
          groceryListHidden={this.state.groceryListHidden}
          randomRecipes={this.state.randomRecipes}
          HideGroceryListButtonHidden={this.state.HideGroceryListButtonHidden}
          hideGroceryList={this.hideGroceryList}
          titleHidden={this.state.titleHidden}
          footerHidden={this.state.footerHidden}
          email={this.email}
          returnToMain={this.returnToMain}
          pandaMessage={this.state.pandaMessage}
          router={this.router}
          activeIndex={this.state.activeIndex}
        />
        <Menu
          menuHidden={this.state.menuHidden}
          recipeData={this.state.randomRecipes}
          changeRecipe={this.changeRecipe}
          isChanging={this.state.isChanging}
          activeIndex={this.state.activeIndex}
          handleClick={this.handleClick}
        />
        <div className="divider-small" />

        <Footer
          authenticate={this.authenticate}
          userAuthenticated={this.state.userAuthenticated}
          footerHidden={this.state.footerHidden}
          logOut={this.logOut}
        />
      </React.Fragment>
    );
  }
}

export default App;
