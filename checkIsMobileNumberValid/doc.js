module.exports = {
  title: "checkIsMobileNumberValid",
  description: "Check mobile number format is valid or not.",
  arguments: `
    mobileNumber = ""; // required
  `,
  usage: `
    checkIsMobileNumberValid("0912345678");
    checkIsMobileNumberValid("0912-345-678");
    checkIsMobileNumberValid("+8860912345678");
    checkIsMobileNumberValid("+886912345678");
    checkIsMobileNumberValid("+886912-345-678");
    // true

    checkIsMobileNumberValid();
    checkIsMobileNumberValid("09");
    checkIsMobileNumberValid("091234567");
    checkIsMobileNumberValid("0912-345");
    checkIsMobileNumberValid("09123-45-678");
    checkIsMobileNumberValid("0912345-678");
    checkIsMobileNumberValid("0912-345678");
    checkIsMobileNumberValid("+88609");
    checkIsMobileNumberValid("+886091234567");
    checkIsMobileNumberValid("+8860912-34567");
    // false
  `,
  kind: "String"
};
