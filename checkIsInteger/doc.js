module.exports = {
  title: "checkIsInteger",
  description: "Check the number is an integer or not.",
  arguments: `
    value // required, any type is accepted.
  `,
  usage: `
    checkIsInteger(1);
    // true

    checkIsInteger(1.5);
    // false
  `,
  kind: "Number"
};
