// local files
import checkIsiOS from "../checkIsiOS/index.js";
import checkIsAndroid from "../checkIsAndroid/index.js";

const checkIsMobile = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return checkIsiOS() || checkIsAndroid();
};

export default checkIsMobile;
