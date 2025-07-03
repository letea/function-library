// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getUniqueValuesFromArray from "../getUniqueValuesFromArray/index.js";

const testCases = [
  {
    describe: "should return an array with unique values in original array",
    it: "if the argument is valid.",
    toBe: [1, 5],
    cases: [[1, 2, 3, 2, 3, 5]]
  }
];

const handler = ({ testCase, item }) => {
  expect(getUniqueValuesFromArray(item)).toEqual(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
