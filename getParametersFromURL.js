// local files
const checkIsString = require("./checkIsString");

const getParametersFromURL = (url = "") => {
  if (!checkIsString(url)) {
    throw new Error("The parameter is not string.");
  }

  let questionSignIndex = url.indexOf("?");
  // Have no any Parameter
  if (questionSignIndex === -1) {
    return {};
  }

  const searchString = url.slice(url.indexOf("?") + 1);
  const parameterStrings = searchString.split("&");
  let parameters = {};

  parameterStrings.forEach(parameterString => {
    const [key, value] = parameterString.split("=");
    if (key && value) {
      parameters[key] = decodeURI(value);
    } else {
      console.warn("parameterString has no equal sign", parameterString);
    }
  });

  return parameters;
};

module.exports = getParametersFromURL;
