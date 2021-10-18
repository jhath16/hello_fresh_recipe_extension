// Create map object for converting HelloFresh units into convert-units units
let unitConversionMap = {
    ounce: "oz",
    cup: "cup",
    tablespoon: "Tbs",
    teaspoon: "tsp"
}

// What to do with following ambiguous units? :
// "Thumb"
// "Unit"
// ^ Most likely we'll ignore any unit that doesn't match and
// search this table to see if we will do any math on it later
module.exports = unitConversionMap
