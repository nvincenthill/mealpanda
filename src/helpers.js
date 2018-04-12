export function randomize(recipes) {
  let rand_recipes = [];
  for (let i = 0; i < 6; i++) {
    let temp = Math.floor(Math.random() * Math.floor(recipes.length));
    if (!rand_recipes.includes(temp)) {
      rand_recipes.push(recipes[temp]);
    } else {
      i--;
    }
  }
}

export function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export function createGroceryList(arrayOfRecipes) {
  console.log("Creating GroceryList...");
  let inventory = [];
  for (let i = 0; i < arrayOfRecipes.length; i++) {
    inventory.push(arrayOfRecipes[i].recipeIngredient);
  }
  
  let merged = [];
  for (let i = 0; i < inventory.length; i++) {
    merged = merged.concat(inventory[i]);
  }
  console.log(merged);

  let helper = {};

  let groceryList = merged.reduce(function(r, o) {
    let key = o.name;
    if (!helper[key]) {
      helper[key] = Object.assign({}, o); // create a copy of o
      r.push(helper[key]);
    } else {
      helper[key].quantity += o.quantity;
    }
    return r;
  }, []);

  console.log(groceryList);

  groceryList = groceryList.sort(function(a, b) {
    return a.type.toLowerCase().localeCompare(b.type.toLowerCase());
  });

}
