// local files
import checkIsInAppBrowserByFacebook from "../checkIsInAppBrowserByFacebook/index.js";
import checkIsInAppBrowserByLine from "../checkIsInAppBrowserByLine/index.js";
import checkIsEdge from "../checkIsEdge/index.js";
import checkIsSamsungBrowser from "../checkIsSamsungBrowser/index.js";

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

export default checkIsChrome;
