// local files
const checkIsNumber = require("../checkIsNumber");
const checkIsInteger = require("../checkIsInteger");

const getRandomString = (length = 3) => {
  if (!checkIsNumber(length) || !checkIsInteger(length) || length < 1) {
    throw new Error(`The length is not a valid number. ${length}`);
  }

  let text = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i += 1) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return text;
};

module.exports = getRandomString;
