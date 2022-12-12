import Rebase from "re-base";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import config from "./components/config";

//remove
const databaseURL = "https://mealplanner-196022.firebaseio.com";

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDxflJBdQ-NZobymtt-nSnUICNnJIgqbqE',
  authDomain: "mealplanner-196022.firebaseapp.com",
  databaseURL: databaseURL
});

const base = getDatabase(firebaseApp);

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

