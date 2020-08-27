// local modules - jest
import runTest from "./jest/runTest";

// local files
import getSecondsFromMilliseconds from "./getSecondsFromMilliseconds";

const testCases = [
  {
    describe: "should return 1 second",
    it: "if is 1000 milliseconds",
    toBe: 1,
    cases: [1000]
  },
  {
    describe: "should throw an exception",
    it: "if there is invalid argument",
    cases: [[], {}, null, undefined],
    handler: ({ item }) => {
      expect(() => {
        getSecondsFromMilliseconds(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(getSecondsFromMilliseconds(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
