// local files
const checkIsInAppBrowserByFacebook = require("./checkIsInAppBrowserByFacebook");
const checkIsInAppBrowserByLine = require("./checkIsInAppBrowserByLine");
const checkIsEdge = require("./checkIsEdge");
const checkIsSamsungBrowser = require("./checkIsSamsungBrowser");

const checkIsChrome = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  if (
    checkIsEdge() ||
    checkIsSamsungBrowser() ||
    checkIsInAppBrowserByFacebook() ||
    checkIsInAppBrowserByLine()
  ) {
    return false;
  }

  return !!navigator.userAgent.match(/chrome|crios/i);
};

module.exports = checkIsChrome;
