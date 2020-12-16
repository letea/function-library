// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const getRandomValueInArray = require("../getRandomValueInArray");

const testCases = [
  {
    describe: "should return",
    it: "an value from exampleArray",
    handler: () => {
      const exampleArray = ["a", "b", "c", "d", "e"];
      for (let i = 0; i < 100; i++) {
        const value = getRandomValueInArray(exampleArray);
        expect(exampleArray.includes(value)).toBe(true);
      }
    }
  },
  {
    describe: "should return",
    it: "undefined if array is empty",
    handler: () => {
      const value = getRandomValueInArray([]);
      expect(value).toBeUndefined();
    }
  },
  {
    describe: "should throw an exception",
    it: "argument is not an array",
    handler: () => {
      expect(() => {
        getRandomValueInArray(0);
      }).toThrow();
    }
  }
];

runTest({ testCases });

module.exports = {
  testCases
};
