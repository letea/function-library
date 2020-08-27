const checkIsBrowser = () => {
  return ![typeof window, typeof document].includes("undefined");
};

export default checkIsBrowser;
