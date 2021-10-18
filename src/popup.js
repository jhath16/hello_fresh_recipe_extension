let convert = require("convert-units");
let unitConversionMap = require("./unit-conversion-map");

document.getElementById("generateButton").addEventListener("click", function (event) {
  // For now, we will retrieve all of the data in the chrome storage for our extension.
  // In the future, we may need to refactor to place all recipes in a single object and retrieve the key another way
  // if we happen to generate any more keys (or we could just filter by "recipe-*" keys)
  chrome.storage.local.get(null, function (items) {
    console.log(typeof items);
    console.log(items);
    
    let output = {ingredients:[]};

    for (key in items) {
      recipe = items[key];
      recipe.ingredients.forEach((ingredient) => {
        ingredientInOutputList = output.ingredients.find(outputIngredient => {
          return outputIngredient.name == ingredient.name;
        });
        if (!ingredientInOutputList) {
          // add the whole object to list
          output.ingredients.push(ingredient);
        } else {
          // do math to the current object
          // for now assume all units of matching ingredients are the same (i.e 2 tsp sriracha in one recipe vs 1 tsp in another)
          ingredientInOutputList.amount.number += ingredient.amount.number; // should mutate the obj in list
        }
      });
    }

    let newList = document.createElement("ul");   
    output.ingredients.forEach((i) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${i.amount.number} ${i.amount.unit} ${i.name}`
        newList.append(listItem);
    });
    document.getElementById("output").append(newList);
  });
});