import Rebase from "re-base";
import firebase from "firebase";

//remove
const databaseURL = "https://mealplanner-196022.firebaseio.com"

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: databaseURL
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;