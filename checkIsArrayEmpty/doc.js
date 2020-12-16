module.exports = {
  title: "checkIsArrayEmpty",
  description: "Check the array is empty or not.",
  arguments: `
    array = []; // required
  `,
  usage: `
    checkIsArrayEmpty([])
    // true

    checkIsArrayEmpty([1,2,3])
    // false
  `,
  kind: "Array"
};
