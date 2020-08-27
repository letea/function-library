// local files
import checkIsEdge from "./checkIsEdge";
import checkIsChrome from "./checkIsChrome";
import checkIsFirefox from "./checkIsFirefox";
import checkIsSamsungBrowser from "./checkIsSamsungBrowser";
import checkIsInAppBrowserByFacebook from "./checkIsInAppBrowserByFacebook";
import checkIsInAppBrowserByLine from "./checkIsInAppBrowserByLine";

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
