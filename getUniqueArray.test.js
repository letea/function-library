// local modules - jest
import runTest from "./jest/runTest";

// local files
import getUniqueArray from "./getUniqueArray";

const testCases = [
  {
    describe: "should return an unique array",
    it: "if the argument is valid.",
    toBe: [1, 2, 3, 5],
    cases: [[1, 2, 3, 2, 3, 5]]
  },
  {
    describe: "should return an unique array",
    it: "if the argument is valid.",
    toBe: [1, 2, 3, "a", "b", "c"],
    cases: [[1, 2, 3, "a", "b", 2, "c", "a"]]
  }
];

const handler = ({ testCase, item }) => {
  expect(getUniqueArray(item)).toEqual(testCase.toBe);
};

runTest({ testCases, handler });
