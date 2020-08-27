// local modules - jest
import runTest from "./jest/runTest";

// local files
import checkIsString from "./checkIsString";

const testCases = [
  {
    describe: "should return true",
    it: "if the argument is a string",
    toBe: true,
    cases: ["", "123", "ABC"]
  },
  {
    describe: "should return false",
    it: "if the argument isn't an string",
    toBe: false,
    cases: [null, undefined, NaN, Infinity, 123, [], {}]
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsString(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
