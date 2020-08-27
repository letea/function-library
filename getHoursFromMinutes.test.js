// local modules - jest
import runTest from "./jest/runTest";

// local files
import getHoursFromMinutes from "./getHoursFromMinutes";

const testCases = [
  {
    describe: "should return 1 hour",
    it: "if is 60 minutes",
    toBe: 1,
    cases: [60]
  },
  {
    describe: "should throw an exception",
    it: "if there is invalid argument",
    cases: [[], {}, null, undefined],
    handler: ({ item }) => {
      expect(() => {
        getHoursFromMinutes(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(getHoursFromMinutes(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
