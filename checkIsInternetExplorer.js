const checkIsInternetExplorer = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return !!navigator.userAgent.match(/msie|wow|\.net/i);
};

export default checkIsInternetExplorer;
