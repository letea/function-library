// node modules
import ClipboardJS from "clipboard";

const checkIsClipboardSupported = () => {
  return ClipboardJS.isSupported();
};

export default checkIsClipboardSupported;
