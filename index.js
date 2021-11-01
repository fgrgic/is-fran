const franStrings = require("./constants");

function isFran(text) {
  let test = text.toLowerCase().trim();
  test = test.replace(/\s/g, "");

  for (let i = 0; i < franStrings.length; ++i) {
    if (test === franStrings[i]) return true;
  }

  return false;
}

module.exports = isFran;
