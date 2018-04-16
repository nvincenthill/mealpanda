// gSec j5G60cS8im1NfBxNO4WO4-ab

import React from "react";
// import PropTypes from "prop-types";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import base, { firebaseApp } from "../base";
import firebase from "firebase";
import data from "../recipes.js";
import { shuffle, preloadImages } from "../helpers";

class App extends React.Component {
  state = {
    randomRecipes: [],
    recipeData: data,
    loading: true,
    menuHidden: true,
    generateButtonHidden: false,
    groceryButtonHidden: true,
    HideGroceryListButtonHidden: true,
    groceryListHidden: true,
    userAuthenticated: false,
    uid: null
  };

  loadMenu = () => {
    this.setState({ menuHidden: false });
    this.setState({ generateButtonHidden: true });
    this.setState({ groceryButtonHidden: false });
  };

  loadGroceryList = () => {
    this.setState({ groceryListHidden: false });
    this.setState({ groceryButtonHidden: true });
    this.setState({ HideGroceryListButtonHidden: false });
  };

  hideGroceryList = () => {
    this.setState({ groceryListHidden: true });
    this.setState({ groceryButtonHidden: false });
    this.setState({ HideGroceryListButtonHidden: true });
  }

  changeRecipe = key => {
    const mixed = shuffle(this.state.recipeData);
    const randomRecipes = this.state.randomRecipes;
    const oldRecipe = randomRecipes[key];
    let newRecipe = oldRecipe;
    let usedNames = [];

    for (let j = 0; j < this.state.randomRecipes.length; j++) {
      usedNames.push(this.state.randomRecipes[j].name)
    }

    for (let k = 0; k < mixed.length; k++) {
      newRecipe = mixed[k]
      if (!usedNames.includes(newRecipe.name)) {
        break;
      }
    }

    randomRecipes.splice(key, 1, newRecipe);
    this.setState({ randomRecipes: randomRecipes });
  };
 
  authHandler = async authData => {
    // Look up current owner
    const userRecipes = await base.fetch(`/randomRecipes`, {
      context: this
    });
    // set the state of randomRecipes to reflect current user
    if (!userRecipes.owner) {
      await base.post(`/owner`, {
        data: authData.user.uid
      })
    }

    this.setState({
      uid: authData.user.uid,
      owner: this.state.owner,
      userAuthenticated: true
    })
    console.log(authData);
    console.log(userRecipes);
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logOut = async () => {
    await firebase.auth().signOut();
    this.setState({
      uid: null,
      userAuthenticated: false
    })
  }

  componentWillMount() {
    // console.log("MOUNTING APP");

    //sync state with firebase
    this.ref = base.syncState(`/randomRecipes`, {
      context: this,
      state: 'randomRecipes'
    });
    
    // TBD fix this
    for (let i = 0; i < this.state.recipeData.length; i++)
    preloadImages(this.state.recipeData[i].image);
  }


  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 750);
    const randomRecipes = [];
    const mixed = shuffle(this.state.recipeData);
    for (let i = 0; i < 6; i++) {
      randomRecipes.push(mixed[i]);
    }
    this.setState({ randomRecipes: randomRecipes });

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
          randomRecipes={this.state.randomRecipes}
          HideGroceryListButtonHidden={this.state.HideGroceryListButtonHidden}
          hideGroceryList={this.hideGroceryList}
        />
        <Menu
          menuHidden={this.state.menuHidden}
          recipeData={this.state.randomRecipes}
          changeRecipe={this.changeRecipe}
        />
        <Footer 
          authenticate={this.authenticate}
          userAuthenticated={this.state.userAuthenticated}
          logOut={this.logOut}
        />
      </React.Fragment>
    );
  }
}

export default App;
