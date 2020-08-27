const checkIsLocalStorageSupported = () => {
  return (
    !!window.localStorage &&
    typeof localStorage.getItem === "function" &&
    typeof localStorage.setItem === "function" &&
    typeof localStorage.removeItem === "function"
  );
};
