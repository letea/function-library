// local files
const checkIsiOS = require("../checkIsiOS");
const checkIsAndroid = require("../checkIsAndroid");

const checkIsMobile = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return checkIsiOS() || checkIsAndroid();
};

module.exports = checkIsMobile;
