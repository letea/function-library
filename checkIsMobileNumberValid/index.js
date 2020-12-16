// local files
const checkIsString = require("../checkIsString");

const checkIsMobileNumberValid = (mobileNumber = "") => {
  if (!checkIsString(mobileNumber)) {
    throw new Error("The parameter is not string.", mobileNumber);
  }

  const mobileNumberWith0Prefix = /(\+886)*(09[0-9]{8})|(09[0-9]{2}-[0-9]{3}-[0-9]{3})/g;
  const mobileNumberWithout0Prefix = /\+886((9[0-9]{8})|(9[0-9]{2}-[0-9]{3}-[0-9]{3}))/g;

  return (
    !!mobileNumber.match(mobileNumberWith0Prefix) ||
    !!mobileNumber.match(mobileNumberWithout0Prefix)
  );
};

module.exports = checkIsMobileNumberValid;
