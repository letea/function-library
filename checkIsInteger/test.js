// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import checkIsInteger from "../checkIsInteger/index.js";

const testCases = [
  {
    describe: "should return true",
    it: "if the argument is an integer number",
    toBe: true,
    cases: [2, 5, 10, 99]
  },
  {
    describe: "should return false",
    it: "if the argument is not an integer number",
    toBe: false,
    cases: [0.5, -0.3, "", {}, undefined]
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsInteger(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
