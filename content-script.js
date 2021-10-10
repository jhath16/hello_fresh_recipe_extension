// Add an element to the page that allows you to add recipes to list
let newEl = document.createElement("div");
newEl.className = "add-button-container";
newEl.innerHTML = `
    <div class="add-button">Add Recipe</div>
`;
document.body.appendChild(newEl);
// Onclick of "add recipe", grab the ingredient info
// Parse the ingredient info to the actual values


// Add the recipe and ingredient list to our grocery list
// (Probably going to need to use the storage API)

// Questions
// Which page will the final list go to? 

// The extension popup.html should show the currently added 
// recipes and give options to remove them.