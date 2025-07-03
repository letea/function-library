const getAndroidVersion = () => {
  const match = navigator.userAgent.match(/android\s([0-9.]*)/i);

  return match ? match[1] : "";
};

export default getAndroidVersion;
