// local modules - jest
import runTest from "./jest/runTest";

// local files
import getSearchFromParameters from "./getSearchFromParameters";

const testCases = [
  {
    describe: "should return an object with parameters",
    it: "if the argument is valid.",
    toBe: "?a=1",
    cases: [{ a: 1 }]
  },
  {
    describe: "should return an object with parameters",
    it: "if the argument is valid.",
    toBe: "?a=1&b=2&c=3",
    cases: [{ a: 1, b: 2, c: 3 }]
  },
  {
    describe: "should return an object with parameters",
    it: "if the argument is valid.",
    toBe: "?a=%E5%80%BC",
    cases: [{ a: "值" }]
  },
  {
    describe: "should return a empty string",
    it: "if there is an empty object",
    toBe: "",
    cases: [{}]
  },
  {
    describe: "should throw an error",
    it: "if argument is not an object",
    handler: () => {
      expect(() => {
        getSearchFromParameters([]);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(getSearchFromParameters(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
