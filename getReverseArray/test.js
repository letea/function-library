// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const getReverseArray = require("../getReverseArray");

const testCases = [
  {
    describe: "should return an reversed array",
    it: "if the argument is valid.",
    toBe: [1, 2, 3, 4, 5],
    cases: [[5, 4, 3, 2, 1]]
  }
];

const handler = ({ testCase, item }) => {
  expect(getReverseArray(item)).toEqual(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
