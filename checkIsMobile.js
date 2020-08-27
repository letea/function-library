// local files
import checkIsiOS from "./checkIsiOS";
import checkIsAndroid from "./checkIsAndroid";

const checkIsMobile = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return checkIsiOS() || checkIsAndroid();
};

export default checkIsMobile;
