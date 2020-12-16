// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const getRandomString = require("../getRandomString");

const testCases = [
  {
    describe: "should return string",
    it: "with length is 3 if there is no argument.",
    handler: () => {
      const string = getRandomString();
      const isString = typeof string === "string";
      expect(isString).toBe(true);
      expect(string).toHaveLength(3);
    }
  },
  {
    describe: "should return string",
    it: "if the argument is an integer number greater than 0",
    cases: [2, 5, 10, 99],
    handler: ({ item }) => {
      const string = getRandomString(item);
      const isString = typeof string === "string";
      expect(isString).toBe(true);
      expect(string).toHaveLength(item);
    }
  },
  {
    describe: "should throw an Error",
    it: "if the argument is not a valid number",
    cases: [-1, 0.5, 10.5, NaN, Infinity, {}, []],
    handler: ({ item }) => {
      expect(() => {
        getRandomString(item);
      }).toThrow();
    }
  }
];

runTest({ testCases });

module.exports = {
  testCases
};
