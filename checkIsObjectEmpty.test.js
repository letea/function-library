// local modules - jest
import runTest from "./jest/runTest";

// local files
import checkIsObjectEmpty from "./checkIsObjectEmpty";

const testCases = [
  {
    describe: "should return true",
    it: "if the object is empty",
    toBe: true,
    cases: [{}]
  },
  {
    describe: "should return false",
    it: "if the object is not empty",
    toBe: false,
    cases: [{ a: 1 }]
  },
  {
    describe: "should throw an error",
    it: "if the argument isn't an object",
    cases: [null, undefined, NaN, Infinity, "123", 123, []],
    handler: ({ item }) => {
      expect(() => {
        checkIsObjectEmpty(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsObjectEmpty(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
