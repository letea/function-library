// local files
const checkIsObject = require("../checkIsObject");
const checkIsObjectEmpty = require("../checkIsObjectEmpty");

const getSearchFromParameters = (parameters = {}) => {
  if (!checkIsObject(parameters)) {
    throw new Error("The parameter is not object.");
  }

  if (checkIsObjectEmpty(parameters)) {
    return "";
  }

  let search = "?";
  Object.keys(parameters).forEach((key, index, array) => {
    search += `${key}=${encodeURI(parameters[key])}`;
    if (index + 1 < array.length) {
      search += "&";
    }
  });
  return search;
};

module.exports = getSearchFromParameters;
