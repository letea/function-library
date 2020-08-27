// local files
import checkIsInAppBrowserByFacebook from "./checkIsInAppBrowserByFacebook";
import checkIsInAppBrowserByLine from "./checkIsInAppBrowserByLine";
import checkIsEdge from "./checkIsEdge";
import checkIsSamsungBrowser from "./checkIsSamsungBrowser";

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
