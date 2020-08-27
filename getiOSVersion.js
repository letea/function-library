const getiOSVersion = () => {
  const match = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
  let version = "";

  if (match !== undefined && match !== null) {
    version = [match[1], match[2], match[3] || ""];
    version = version.filter(number => {
      return number !== "";
    });
    return version.join(".");
  }

  return "";
};

export default getiOSVersion;
