// local modules - jest
const runTest = require("./jest/runTest");

// local files
const checkIsArrayEmpty = require("./checkIsArrayEmpty");

const testCases = [
  {
    describe: "should return true",
    it: "if the array is empty",
    toBe: true,
    cases: [[]]
  },
  {
    describe: "should return false",
    it: "if the array is not empty",
    toBe: false,
    cases: [[1, 2, 3]]
  },
  {
    describe: "should throw an error",
    it: "if the argument isn't an array",
    cases: [null, undefined, NaN, Infinity, "123", 123, {}],
    handler: ({ item }) => {
      expect(() => {
        checkIsArrayEmpty(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsArrayEmpty(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
