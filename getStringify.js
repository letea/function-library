// node modules
const checkIsArray = require("./checkIsArray");
const checkIsObject = require("./checkIsObject");
const checkIsString = require("./checkIsString");
const checkIsFunction = require("./checkIsFunction");

function getStringifyFromObject(parameter = {}) {
  let result = "";

  Object.keys(parameter).forEach((key, index, array) => {
    if (checkIsString(parameter[key])) {
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
    if (checkIsString(item)) {
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
    } else if (checkIsFunction(parameter)) {
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
