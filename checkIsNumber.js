const checkIsNumber = parameter => {
  return (
    typeof parameter === "number" &&
    !Number.isNaN(parameter) &&
    parameter !== Infinity
  );
};

module.exports = checkIsNumber;
