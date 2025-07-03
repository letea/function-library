// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getDuplicateValuesFromArray from "../getDuplicateValuesFromArray/index.js";

const testCases = [
  {
    describe:
      "should return an array with duplicate values in the original array",
    it: "if the argument is valid.",
    toBe: [2, 3],
    cases: [[1, 2, 3, 2, 3, 5]]
  }
];

const handler = ({ testCase, item }) => {
  expect(getDuplicateValuesFromArray(item)).toEqual(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
