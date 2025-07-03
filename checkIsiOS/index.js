// local files
import checkIsiPhone from "../checkIsiPhone/index.js";
import checkIsiPad from "../checkIsiPad/index.js";

const checkIsiOS = () => {
  return checkIsiPhone() || checkIsiPad();
};

export default checkIsiOS;
