// local files
const checkIsiPhone = require("./checkIsiPhone");
const checkIsiPad = require("./checkIsiPad");

const checkIsiOS = () => {
  return checkIsiPhone() || checkIsiPad();
};

module.exports = checkIsiOS;
