// local modules - jest
import runTest from "./jest/runTest";

// local files
import getMinutesFromHours from "./getMinutesFromHours";

const testCases = [
  {
    describe: "should return 60 minutes",
    it: "if is 1 hours",
    toBe: 60,
    cases: [1]
  },
  {
    describe: "should throw an exception",
    it: "if there is invalid argument",
    cases: [[], {}, null, undefined],
    handler: ({ item }) => {
      expect(() => {
        getMinutesFromHours(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(getMinutesFromHours(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
