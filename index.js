const franStrings = require("./constants");

function isFran(text) {
  if (!text || !(typeof text === "string")) return false;

  let test = text.toLowerCase();
  test = test.replace(/\s/g, "");

  for (let i = 0; i < franStrings.length; ++i) {
    if (test === franStrings[i]) return true;
  }

  return false;
}

module.exports = isFran;
