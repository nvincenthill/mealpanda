import React from "react";
import Menu from "./Menu";
import MealPanda from "./MealPanda";
import Header from "./Header";
import Footer from "./Footer";
import base, { firebaseApp } from "../base";
import firebase from "firebase";
import data from "../recipes.js";
import { shuffle } from "../helpers";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import update from "immutability-helper";

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

  loadMenu = () => {
    setTimeout(this.showMenu, 750);
    this.setState({ groceryButtonHidden: false });
    this.setState({ footerHidden: true });
    this.setState({ titleHidden: true });
    this.setState({ pandaHidden: true });
    this.setState({ pandaMessage: "Reawaken the meal panda" });
  };

  returnToMain = () => {
    this.setState({ pandaHidden: false });
    this.setState({ titleHidden: false });
    this.setState({ menuHidden: true });
    this.setState({ generateButtonHidden: false });
    this.setState({ groceryButtonHidden: true });
    this.setState({ footerHidden: false });
    this.setState({ pandaMessage: "Let the panda decide" });
  };

  showMenu = () => {
    this.setState({ menuHidden: false });
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
    console.log(`changing ${key}`);
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
      for(let i = 0; i < 6; i++) {
        this.changeRecipe(i);
      }
    setTimeout((this.loadMenu), 1500);

  }; 

  handleClick = index => {
    this.setState({ activeIndex: index });
    this.setState({ isChanging: true });
    setTimeout(() => this.changeClass(index), 800);
  };

  changeClass = index => {
    this.changeRecipe(index);
    this.setState({ isChanging: false });
    this.setState({ activeIndex: null });
  };

  authHandler = async authData => {
    this.setState({
      uid: authData.user.uid,
      userAuthenticated: true
    });

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

  email = () => {
    // var mandrill = require("node-mandrill")(
    //   "3150df61a2dce2abb43bb3da4fa3879d-us18"
    // );
    // mandrill(
    //   "/messages/send",
    //   {
    //     message: {
    //       to: [{ email: "nvincenthill@gmail.com", name: "Jim Rubenstein" }],
    //       from_email: "nvincenthill@gmail.com",
    //       subject: "Hey, what's up?",
    //       text: "Hello, I sent this message using mandrill."
    //     }
    //   },
    //   function(error, response) {
    //     //uh oh, there was an error
    //     if (error) console.log(JSON.stringify(error));
    //     else
    //       //everything's good, lets see what mandrill said
    //       console.log(response);
    //   }
    // );
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
      }
    });
  };

  router = () => {
    if (this.state.menuHidden) {
      this.loadMenu();
    } else {
      this.regenerate();
    }
  };

  //TODO Do not mutate state
  componentWillMount() {
    for (let j = 0; j < this.state.recipeData.length; j++) {
      let sortedIngredients = this.state.recipeData[j].recipeIngredient.sort(
        function(a, b) {
          return a.type > b.type ? 1 : b.type > a.type ? -1 : 0;
        }
      );
      this.state.recipeData[j].recipeIngredient = sortedIngredients;
    }
    // this.setState({ randomRecipes: randomRecipes });
  }

  componentDidMount() {
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
          authenticate={this.authenticate}
          userAuthenticated={this.state.userAuthenticated}
          footerHidden={this.state.footerHidden}
          email={this.email}
          logOut={this.logOut}
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
