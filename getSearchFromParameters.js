// local files
import checkIsObject from "./checkIsObject";
import checkIsObjectEmpty from "./checkIsObjectEmpty";

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

export default getSearchFromParameters;
