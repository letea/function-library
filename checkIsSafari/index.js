// local files
import checkIsEdge from "../checkIsEdge/index.js";
import checkIsChrome from "../checkIsChrome/index.js";
import checkIsFirefox from "../checkIsFirefox/index.js";
import checkIsSamsungBrowser from "../checkIsSamsungBrowser/index.js";
import checkIsInAppBrowserByFacebook from "../checkIsInAppBrowserByFacebook/index.js";
import checkIsInAppBrowserByLine from "../checkIsInAppBrowserByLine/index.js";

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

export default checkIsSafari;
