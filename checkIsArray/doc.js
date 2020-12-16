module.exports = {
  title: "checkIsArray",
  description: "Check data type is an array or not.",
  arguments: `
    value // required, any type is accepted.
  `,
  usage: `
    checkIsArray([1, 2, 3]);
    // true

    checkIsArray("abc");
    // false
  `,
  kind: "Array"
};
