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
  let inventory = [];
  for (let i = 0; i < arrayOfRecipes.length; i++) {
    if (arrayOfRecipes[i].recipeIngredient) {
      inventory.push(arrayOfRecipes[i].recipeIngredient);
    }
  }

  let merged = [];
  for (let i = 0; i < inventory.length; i++) {
    merged = merged.concat(inventory[i]);
  }

  let helper = {};

  let groceryList = merged.reduce(function(acc, el) {
    let key = el.name;
    if (!helper[key]) {
      helper[key] = Object.assign({}, el); // create a copy of el
      acc.push(helper[key]);
    } else {
      helper[key].quantity += el.quantity;
    }
    return acc;
  }, []);

  groceryList = groceryList.sort(function(a, b) {
    return a.type > b.type ? 1 : b.type > a.type ? -1 : 0;
  });
  return groceryList;
}

export function preloadImages(array) {
  if (!preloadImages.list) {
    preloadImages.list = [];
  }
  var list = preloadImages.list;
  for (var i = 0; i < array.length; i++) {
    var img = new Image();
    img.onload = function() {
      var index = list.indexOf(this);
      if (index !== -1) {
        // remove image from the array once it's loaded
        // for memory consumption reasons
        list.splice(index, 1);
      }
    };
    list.push(img);
    img.src = array[i];
  }
}

export function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) {
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);
    return memo;
  }, {});
}

export function convertArrayOfObjectsToCSV(args) {
  var result, ctr, keys, columnDelimiter, lineDelimiter, data;

  data = args.data || null;
  if (data == null || !data.length) {
    return null;
  }

  columnDelimiter = args.columnDelimiter || ",";
  lineDelimiter = args.lineDelimiter || "\n";

  keys = Object.keys(data[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach(function(item) {
    ctr = 0;
    keys.forEach(function(key) {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

export function downloadCSV(args, groceryList) {
  alert("Function called!");
  let data, filename, link;

  let csv = convertArrayOfObjectsToCSV({
    data: groceryList
  });
  if (csv == null) return;

  console.log(csv);

  filename = args.filename || "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = "data:text/csv;charset=utf-8," + csv;
  }
  data = encodeURI(csv);

  link = document.createElement("a");
  link.setAttribute("href", data);
  link.setAttribute("download", filename);
  link.click();
}
