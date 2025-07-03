// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getReverseArray from "../getReverseArray/index.js";

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

export { testCases,
  handler
 };
