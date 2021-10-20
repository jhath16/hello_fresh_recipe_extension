let convert = require("convert-units");
let unitConversionMap = require("./unit-conversion-map");

chrome.storage.local.get(null, function (items) {
  let newList = document.createElement("ol");
  for (key in items) {
    recipe = items[key];
    let item = document.createElement("li");
    item.innerHTML = `
      <div class="recipe-item">
        <div class="recipe-title">
          <h4><a href=${recipe.href} target="_blank">${recipe.name}</a></h4>
          <h6>${recipe.sides}</h6>
        </div>
        <div class="recipe-sub-menu">
          <h6>${recipe.nutrition.calories} Cal | ${recipe.time}</h6>
          <div class="red button">Remove</div>
        </div>
      </div>
    `;
    
    item.querySelector(".red.button").setAttribute("data-recipe-key", key);
    item.querySelector(".red.button").addEventListener("click", function (e) {
      chrome.storage.local.remove(this.getAttribute("data-recipe-key"));
      item.remove();
    }); 

    newList.append(item);
  }
  document.querySelector("#selectedRecipesOutput").append(newList);
});

document.getElementById("generateButton").addEventListener("click", function (event) {
  // For now, we will retrieve all of the data in the chrome storage for our extension.
  // In the future, we may need to refactor to place all recipes in a single object and retrieve the key another way
  // if we happen to generate any more keys (or we could just filter by "recipe-*" keys)
  chrome.storage.local.get(null, function (items) {
    
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
    const groceryOutputList = document.getElementById("groceryListOutput");
    groceryOutputList.innerHTML = '';
    groceryOutputList.append(newList);
  });
});

