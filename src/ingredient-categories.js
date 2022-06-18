let ingredientCategories = {
  "Dry Goods": [
    "Jasmine Rice",
    "Corn Starch",
    "Yakisoba Noodles",
    "Flour Tortillas",
    "Crispy Fried Onions",
    "Chickpeas",
    "Cauliflower Rice",
    "Chicken Stock Concentrate",
    "Mushroom Stock Concentrate",
    "Veggie Stock Concentrate",
    "Veggie Pho Stock Concentrate",
    "Pork Ramen Stock Concentrate",
    "Cavatappi Pasta",
    "Flour",
    "Panko Breadcrumbs",
    "Beef Demi-Glace",
    "Rigatoni Pasta",
    "Tomato Paste",
    "Israeli Couscous",
    "Gnocchi",
    "Walnuts",
    "Flatbreads",
    "Cannellini Beans",
    "Peanuts",
    "Ramen Noodles",
    "Peanut Butter",
    "Peanuts",
    "Tempura Mix",
    "Arborio Rice"
  ],
  "Produce": [
    "Ginger",
    "Scallions",
    "Garlic",
    "Lime",
    "Green Beans",
    "Brocolli Florets",
    "Jalapeño",
    "Shredded Red Cabbage",
    "Lemon",
    "Baby Romaine Lettuce",
    "Grape Tomatoes",
    "Radishes",
    "Arugula",
    "Roma Tomato",
    "Guacamole",
    "Yellow Onion",
    "Apple",
    "Mixed Greens",
    "Button Mushrooms",
    "Yukon Gold Potatoes",
    "Carrots",
    "Carrot", // what to do about singular vs plural ingredients? might have to do a .includes on the string match?
    "Chives",
    "Zucchini",
    "Kale",
    "Cremini Mushrooms",
    "Shallot",
    "Brussels Sprouts",
    "Sun-Dried Tomatoes",
    "Persian Cucumber",
    "Cilantro",
    "Shredded Carrots",
    "Arugula Lettuce",
    "Chili Pepper",
    "Bok Choy & Napa Cabbage",
  ],
  "Meat": [
    "Chicken Tenderloins",
    "Beef Sirloin Tips",
    "BBQ Pulled Chicken",
    "Chicken Cutlets",
    "Bacon",
    "Pork Tenderloin",
    "Longhini's Pork Sausage",
    "Italian Chicken Sausage Mix",
    "Chicken Breast Strips",
    "Pulled Pork",
    "Ground Beef",
    "Ground Pork"
  ], 
  "Seafood": [
    "Shrimp"
  ],
  "Bakery": [
    "Demi Baguette",
    "Sourdough Bread"
  ],
  "Dairy": [
    "Parmesan Cheese",
    "Cream Cheese",
    "Monterey Jack Cheese",
    "Cream Sauce Base",
    "Mexican Cheese Blend",
    "PHILADELPHIA® Cream Cheese",
    "Cheddar Cheese",
    "Sour Cream",
    "Grilling Cheese",
    "Milk",
    "Garlic Herb Butter",
    "Ricotta Cheese",
    "Italian Cheese Blend",
    "Crème Fraîche",
    "Coconut Milk"
  ],
  "Condiments": [
    "Sesame Seeds",
    "Soy Sauce",
    "Sesame Oil",
    "White Wine Vinegar",
    "Ketchup",
    "Hoisin Sauce Jar",
    "Sriracha",
    "Red Wine Vinegar",
    "Sour Cream",
    "How Sauce",
    "Dijon Mustard",
    "Mayonnaise",
    "Honey",
    "Ponzu Sauce",
    "Sweet Thai Chili Sauce",
    "Rice Wine Vinegar",
    "Apricot Jam",
    "Kikkoman® Traditionally Brewed Soy Sauce",
    "Sweet Soy Glaze",
    "Sesame Dressing"
  ],
  "Spices": [
    "Ranch Spice",
    "Sugar",
    "Garlic Powder",
    "Blackening Spice",
    "Fry Seasoning",
    "Southwest Spice Blend",
    "Dried Thyme",
    "Chili Flakes",
    "Korean Chili Flakes",
    "Italian Seasoning",
    "Sage",
    "Tuscan Heat Spice",
    "Green Herb Blend",
    "Curry Powder"
  ]
}


// If we don't find any of the ingredients in the list, just place them in an "other" category
module.exports = ingredientCategories;