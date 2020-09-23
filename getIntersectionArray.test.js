// local modules - jest
const runTest = require("./jest/runTest");

// local files
const getIntersectionArray = require("./getIntersectionArray");

const testCases = [
  {
    describe: "should return",
    it: "an intersection array",
    handler: () => {
      expect(
        getIntersectionArray({
          array1: ["a", "b", "c"],
          array2: ["b", "c", "d", "e", "f"]
        })
      ).toEqual(expect.arrayContaining(["b", "c"]));
    }
  },
  {
    describe: "should return an empty array",
    it: "if one of the argument are empty array",
    handler: () => {
      expect(
        getIntersectionArray({ array1: ["a", "b", "c"], array2: [] })
      ).toEqual(expect.arrayContaining([]));

      expect(
        getIntersectionArray({
          array1: ["a", "b", "c"],
          array2: "This is a string."
        })
      ).toEqual(expect.arrayContaining([]));

      expect(getIntersectionArray()).toEqual(expect.arrayContaining([]));
    }
  }
];

runTest({ testCases });

module.exports = {
  testCases
};
