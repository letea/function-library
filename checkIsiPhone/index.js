const checkIsiPhone = () => {
  if (!window || !navigator) {
    throw new Error("No window or navigator founded.");
  }

  return !!navigator.userAgent.match(/iphone/i);
};

export default checkIsiPhone;
