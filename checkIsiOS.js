// local files
import checkIsiPhone from "./checkIsiPhone";
import checkIsiPad from "./checkIsiPad";

const checkIsiOS = () => {
  return checkIsiPhone() || checkIsiPad();
};

export default checkIsiOS;
