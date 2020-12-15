module.exports = {
  title: "checkIsString",
  description: "Check data type is a string or not.",
  arguments: `
    value // required, any type is accepted.
  `,
  usage: `
    checkIsString("abc");
    // true

    checkIsString(123);
    // false

    checkIsString({ a: 1 });
    // false
  `,
  kind: "String"
};
