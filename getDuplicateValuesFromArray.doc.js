module.exports = {
  title: "getDuplicateValuesFromArray",
  description: "Get an array with duplicate values from the original array.",
  arguments: `
    array = []; // required
  `,
  usage: `
    const array = [1, 2, 3, 2, 3, 4, 5];

    getDuplicateValuesFromArray(array);
    // [2, 3]
  `,
  kind: "Array"
};
