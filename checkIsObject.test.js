// local modules - jest
const runTest = require("./jest/runTest");

// local files
const checkIsObject = require("./checkIsObject");

const testCases = [
  {
    describe: "should return true",
    it: "if the argument is an object",
    toBe: true,
    cases: [{}]
  },
  {
    describe: "should return false",
    it: "if the argument isn't an object",
    toBe: false,
    cases: [null, undefined, NaN, Infinity, "123", 123, []]
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsObject(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
