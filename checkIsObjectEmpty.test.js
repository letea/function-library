// local modules - jest
const runTest = require("./jest/runTest");

// local files
const checkIsObjectEmpty = require("./checkIsObjectEmpty");

const testCases = [
  {
    describe: "should return true",
    it: "if the object is empty",
    toBe: true,
    cases: [{}]
  },
  {
    describe: "should return false",
    it: "if the object is not empty",
    toBe: false,
    cases: [{ a: 1 }]
  },
  {
    describe: "should throw an error",
    it: "if the argument isn't an object",
    cases: [null, undefined, NaN, Infinity, "123", 123, []],
    handler: ({ item }) => {
      expect(() => {
        checkIsObjectEmpty(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsObjectEmpty(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
