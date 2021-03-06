let unitConversionMap = require('./unit-conversion-map');
let fractionConversionMap = require("./fraction-conversion-map");

// don't run the script if we are not on a recipe page
if (!/recipes\/.+/gi.test(window.location.pathname)) return false;

// promisify GET'ing things from chrome.storage
function getFromStorage (key) {
    return new Promise(function (resolve, reject) {
        chrome.storage.local.get([key], function (item) {
            resolve(item);
        });
    });
}

// query dom by text content / tag name
function querySelectorIncludesText (selector, text){
    return Array.from(document.querySelectorAll(selector))
      .find(el => el.textContent == text );
}

function disableButton(el) {
    el.classList.add('disabled');
    el.textContent = "Added";
}

document.onreadystatechange = function (e) {
    if (document.readyState != "complete") return;
    // Add an element to the page that allows you to add recipes to list
    let overlayElement = document.createElement('div');
    overlayElement.classList.add('overlay-menu');
    overlayElement.innerHTML = `
        <h5>Grocery List Generator</h5>
        <button id='add-button' class='add-button'>Add to List</button>
    `

    let addButton = overlayElement.querySelector("#add-button");

    document.body.append(overlayElement);

    let recipeKey = "recipe_" + window.location.pathname.replace('/recipes/', '');
    getFromStorage(recipeKey).then((recipe) => {
        if (Object.keys(recipe).length) {
            disableButton(addButton);
        }
    })

    // Onclick of "add recipe", grab the ingredient info
    addButton.addEventListener('click', function(e) {
        disableButton(this);
        // Get metadata about recipe
        let recipeName = document.querySelector("[data-test-id='recipeDetailFragment.recipe-name']").textContent;
        let recipeSides = document.querySelector("[data-test-id='recipeDetailFragment.recipe-name']").nextSibling.textContent;
        let recipeTime = document.querySelector("[data-translation-id='recipe-detail.preparation-time']").parentNode.nextSibling.textContent;
        let recipeDescription = document.querySelector("p").textContent; // this should always be the first p tag on page but may need to change
        let recipeLink = window.location.href;

        // parse nutritional information
        let calorieCount = querySelectorIncludesText('span', 'Calories').nextSibling.textContent.split(' ')[0];
    
        // Initialize recipe object
        let recipe = {
            name: recipeName,
            sides: recipeSides,
            time: recipeTime,
            description: recipeDescription,
            href: recipeLink,
            nutrition: {
                calories: calorieCount
            },
            ingredients: [],
        };
    
        // Parse the ingredient info to the actual values
        let ingredientEls = document.querySelectorAll(".fela-_g6xips .fela-_1qz307e"); // TODO: This seems fragile. Not sure how to make this better
        for (let i = 0; i < ingredientEls.length; i++) {
            let el = ingredientEls[i];
            let [amountNumber, amountUnit] = el.children[0].textContent.split(" ");
            let ingredient = el.children[1].textContent;
    
            recipe.ingredients.push({
                amount: {
                    number: Number(fractionConversionMap[amountNumber] || amountNumber),
                    unit: unitConversionMap[amountUnit] || amountUnit
                },
                name: ingredient
            });
        }
        // Create unique key for all recipes so we do not overwrite them...
        // Will we need to change the way these are stored if we are storign them by week?
    
        let key = "recipe_" + window.location.pathname.replace('/recipes/', '');
        chrome.storage.local.set({[key]: recipe});
        // Add the recipe and ingredient list to our grocery list
        // (Probably going to need to use the storage API)
    });
}

// Questions
// Which page will the final list go to? 

// The extension popup.html should show the currently added 
// recipes and give options to remove them.

// ToDos:
// Add nutritional values
// Add mapping for Hello Fresh units to abbreviations supported by convert-units