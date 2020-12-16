// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const checkIsFunction = require("../checkIsFunction");

const testCases = [
  {
    describe: "should return true",
    it: "if the argument is a function",
    toBe: true,
    cases: [() => {}, function () {}]
  },
  {
    describe: "should return false",
    it: "if the argument isn't a function",
    toBe: false,
    cases: [null, undefined, NaN, Infinity, 123, "", "123", [], {}]
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsFunction(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
