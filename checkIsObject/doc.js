module.exports = {
  title: "checkIsObject",
  description: "Check data type is an object or not.",
  arguments: `
    value // required, any type is accepted.
  `,
  usage: `
    checkIsObject({ a: 123 });
    // true;

    checkIsObject([1, 2, 3]);
    // false

    checkIsObject("abc");
    // false
  `,
  kind: "Object"
};
