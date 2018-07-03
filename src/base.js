import Rebase from "re-base";
import firebase from "firebase";
// import config from "./components/config";

//remove
const databaseURL = "https://mealplanner-196022.firebaseio.com";

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDxflJBdQ-NZobymtt-nSnUICNnJIgqbqE',
  authDomain: "mealplanner-196022.firebaseapp.com",
  databaseURL: databaseURL
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

