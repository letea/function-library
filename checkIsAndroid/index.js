const checkIsAndroid = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return !!navigator.userAgent.match(/android/i);
};

export default checkIsAndroid;
