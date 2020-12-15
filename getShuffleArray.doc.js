module.exports = {
  title: "getShuffleArray",
  description: "Get an array with shuffled.",
  arguments: `
    array = []; // required
  `,
  usage: `
    const array = [1, 2, 3, 4, 5];

    getShuffleArray(array);
    // [5, 3, 2, 1, 4]...
  `,
  kind: "Array"
};
