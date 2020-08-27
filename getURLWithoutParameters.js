// local files
import checkIsString from "./checkIsString";

const getURLWithoutParameters = (url = "") => {
  if (!checkIsString(url)) {
    throw new Error("The parameter is not string.", url);
  }

  const questionSignIndex = url.indexOf("?");

  if (questionSignIndex === -1) {
    return url;
  }

  return url.slice(0, url.indexOf("?"));
};

export default getURLWithoutParameters;
