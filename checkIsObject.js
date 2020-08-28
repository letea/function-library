const checkIsObject = parameter => {
  return (
    typeof parameter === "object" &&
    parameter !== null &&
    !Array.isArray(parameter)
  );
};

module.exports = checkIsObject;
