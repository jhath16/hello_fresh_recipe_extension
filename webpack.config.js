const path = require('path');

module.exports = {
  watch: true,
  mode: 'production',
  entry: {
    contentScript: {import: './src/content-script.js', filename: "./content-script.js"},
    popup: {import: './src/popup.js', filename: "./popup.js"}
  }
};