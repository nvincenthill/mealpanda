import React from "react";
// import PropTypes from "prop-types";
import Menu from "./Menu";
import MealPanda from "./MealPanda";
import Header from "./Header";
import Footer from "./Footer";
import base, { firebaseApp } from "../base";
import firebase from "firebase";
import data from "../recipes.js";
import { shuffle } from "../helpers";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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

    randomRecipes.splice(key, 1, newRecipe);
    this.setState({ randomRecipes: randomRecipes });
  };

  authHandler = async authData => {
    this.setState({
      uid: authData.user.uid,
      userAuthenticated: true
    });

    console.log(authData.user);
    let userRecipes;

    if (!authData.additionalUserInfo.isNewUser) {
      userRecipes = await base.fetch(`users/${this.state.uid}/userRecipes`, {
        context: this
      });
    } else {
      userRecipes = this.state.randomRecipes;
    }

    this.writeUserData(
      this.state.uid,
      userRecipes,
      authData.user.displayName,
      authData.user.email
    );
    this.ref = base.syncState(`users/${this.state.uid}/userRecipes`, {
      context: this,
      state: "randomRecipes"
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logOut = async () => {
    await firebase.auth().signOut();
    this.setState({
      uid: null,
      userAuthenticated: false
    });
  };

  writeUserData = (userId, userRecipes, name, email) => {
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        uid: userId,
        userRecipes: userRecipes,
        name: name,
        email: email
      });
  };

  generateRandomRecipes = () => {
    const randomRecipes = [];
    const mixed = shuffle(this.state.recipeData);
    for (let i = 0; i < 6; i++) {
      randomRecipes.push(mixed[i]);
    }
    this.setState({ randomRecipes: randomRecipes });
  };

  checkIfUserExists = userId => {
    var usersRef = firebase.database().ref(`users/`);
    usersRef.child(userId).once("value", function(snapshot) {
      var exists = snapshot.val() !== null;
      if (exists) {
        console.log(` ${userId} exists!`);
      }
    });
  };

  componentWillMount() {
    for (let j = 0; j < this.state.recipeData.length; j++) {
      let sortedIngredients = this.state.recipeData[j].recipeIngredient.sort(
        function(a, b) {
          return a.type > b.type ? 1 : b.type > a.type ? -1 : 0;
        }
      );
      this.state.recipeData[j].recipeIngredient = sortedIngredients;
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 750);
    this.generateRandomRecipes();

    if (this.state.uid) {
      this.ref = base.syncState(`users/${this.state.uid}/userRecipes`, {
        context: this,
        state: "randomRecipes"
      });
    }
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

    const pandaLogo = <MealPanda />;
    return (
      <React.Fragment>
        <ReactCSSTransitionGroup
          transitionName="logo-animation"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {this.state.generateButtonHidden ? null : pandaLogo}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="header-animation"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
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
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName="menu-animation"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <Menu
            menuHidden={this.state.menuHidden}
            recipeData={this.state.randomRecipes}
            changeRecipe={this.changeRecipe}
          />
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName="footer-animation"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={1500}
        >
          <Footer
            authenticate={this.authenticate}
            userAuthenticated={this.state.userAuthenticated}
            logOut={this.logOut}
          />
        </ReactCSSTransitionGroup>
      </React.Fragment>
    );
  }
}

export default App;
