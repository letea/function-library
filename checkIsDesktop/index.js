// local files
const checkIsWindows = require("../checkIsWindows");
const checkIsMac = require("../checkIsMac");

const checkIsDesktop = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return checkIsWindows() || checkIsMac();
};

module.exports = checkIsDesktop;
