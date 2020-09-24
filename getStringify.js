const checkIsArray = require("./checkIsArray");
const checkIsObject = require("./checkIsObject");

function getStringifyFromObject(parameter = {}) {
  let result = "";

  Object.keys(parameter).forEach((key, index, array) => {
    if (typeof parameter[key] === "string") {
      result += `${key}: "${getStringify(parameter[key])}"`;
    } else {
      result += `${key}: ${getStringify(parameter[key])}`;
    }

    if (index + 1 < array.length) {
      result += ", ";
    }
  });

  return `{${result}}`;
}

function getStringifyFromArray(parameter = []) {
  let result = "";

  parameter.forEach((item, index, array) => {
    if (typeof item === "string") {
      result += `"${getStringify(item)}"`;
    } else {
      result += getStringify(item);
    }

    if (index + 1 < array.length) {
      result += ", ";
    }
  });

  return `[${result}]`;
}

function getStringify(parameter) {
  try {
    let result = "";

    if (checkIsArray(parameter)) {
      // array to string
      result += getStringifyFromArray(parameter);
    } else if (checkIsObject(parameter)) {
      // object to string
      result += getStringifyFromObject(parameter);
    } else if (typeof parameter === "function") {
      // function to string
      result += parameter.toString();
    } else {
      // other to string
      result += parameter;
    }

    return result;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = getStringify;
