// local files
const checkIsArray = require("../checkIsArray");

function getShuffleArray(array = []) {
  if (!checkIsArray(array)) {
    throw new Error("The parameter is not array.");
  }

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

module.exports = getShuffleArray;
