// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getSortedArray from "../getSortedArray/index.js";

const testCases = [
  {
    describe: "should return an sorted array",
    it: "if the argument is valid.",
    toBe: [1, 2, 2, 3, 3, 5],
    cases: [
      [1, 2, 3, 2, 3, 5],
      [5, 1, 3, 2, 3, 2]
    ]
  }
];

const handler = ({ testCase, item }) => {
  expect(getSortedArray(item)).toEqual(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
