module.exports = {
  title: "checkIsNumber",
  description: "Check data type is number or not.",
  arguments: `
    value // required, any type is accepted.
  `,
  usage: `
    checkIsNumber(123);
    // true;

    checkIsNumber("abc");
    // false

    checkIsNumber(NaN);
    // false

    checkIsNumber(Infinity);
    // false
  `,
  kind: "Number"
};
