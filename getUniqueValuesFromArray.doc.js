module.exports = {
  title: "getUniqueValuesFromArray",
  description: "Get an array with unique values from the original array.",
  arguments: `
    array = []; // required
  `,
  usage: `
    const array = [1, 2, 3, 2, 3, 4, 5];

    getUniqueValuesFromArray(array);
    // [1, 4, 5]
  `,
  kind: "Array"
};
