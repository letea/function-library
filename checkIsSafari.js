// local files
const checkIsEdge = require("./checkIsEdge");
const checkIsChrome = require("./checkIsChrome");
const checkIsFirefox = require("./checkIsFirefox");
const checkIsSamsungBrowser = require("./checkIsSamsungBrowser");
const checkIsInAppBrowserByFacebook = require("./checkIsInAppBrowserByFacebook");
const checkIsInAppBrowserByLine = require("./checkIsInAppBrowserByLine");

const checkIsSafari = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  if (
    checkIsEdge() ||
    checkIsChrome() ||
    checkIsFirefox() ||
    checkIsSamsungBrowser() ||
    checkIsInAppBrowserByFacebook() ||
    checkIsInAppBrowserByLine()
  ) {
    return false;
  }

  return !!navigator.userAgent.match(/safari/i);
};

module.exports = checkIsSafari;
