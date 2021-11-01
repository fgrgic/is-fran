const franStrings = require("./constants");

function isFran(text) {
  for (let i = 0; i < franStrings.length; ++i) {
    if (text.toLowerCase().trim() === franStrings[i]) return true;
  }

  return false;
}

module.exports = isFran;
