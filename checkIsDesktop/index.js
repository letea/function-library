// local files
import checkIsWindows from "../checkIsWindows/index.js";
import checkIsMac from "../checkIsMac/index.js";

const checkIsDesktop = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return checkIsWindows() || checkIsMac();
};

export default checkIsDesktop;
