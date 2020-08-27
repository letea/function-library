// local modules - jest
import runTest from "./jest/runTest";

// local files
import checkIsNumber from "./checkIsNumber";

const testCases = [
  {
    describe: "should return true",
    it: "if the argument is a number",
    toBe: true,
    cases: [0, 1, 3.14159, -3.14159]
  },
  {
    describe: "should return false",
    it: "if the argument isn't a number",
    toBe: false,
    cases: [null, undefined, NaN, Infinity, "123", {}, []]
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsNumber(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
