// local files
const checkIsObject = require("../checkIsObject");

const checkIsObjectEmpty = (object) => {
  if (!checkIsObject(object)) {
    throw new Error(`The parameter is not an object.`);
  }

  return Object.keys(object).length === 0;
};

module.exports = checkIsObjectEmpty;
