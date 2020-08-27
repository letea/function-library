// local files
import checkIsWindows from "./checkIsWindows";
import checkIsMac from "./checkIsMac";

const checkIsDesktop = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return checkIsWindows() || checkIsMac();
};

export default checkIsDesktop;
