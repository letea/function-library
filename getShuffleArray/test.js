// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const getShuffleArray = require("../getShuffleArray");

const testCases = [
  {
    describe: "should return an shuffled array",
    it: "if the argument is valid.",
    cases: [[5, 4, 3, 2, 1]],
    handler: ({ testCase, item }) => {
      const shuffledArray = getShuffleArray(item);
      expect(Array.isArray(shuffledArray)).toBe(true);
      expect(shuffledArray.length).toBe(item.length);
      item.forEach(childItem => {
        expect(shuffledArray.includes(childItem)).toBe(true);
      });
    }
  }
];

runTest({ testCases });

module.exports = {
  testCases
};
