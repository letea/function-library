// local modules - jest
const runTest = require("./jest/runTest");

// local files
const getURLWithoutParameters = require("./getURLWithoutParameters");

const testCases = [
  {
    describe: "should return an URL without parameters",
    it: "if the argument is valid",
    toBe: "http://example.com/",
    cases: [
      "http://example.com/?a=1",
      "http://example.com/?a=1&b=2&c=3",
      "http://example.com/?a=%E5%80%BC",
      "http://example.com/"
    ],
    handler: ({ testCase, item }) => {
      expect(getURLWithoutParameters(item)).toBe(testCase.toBe);
    }
  }
];

runTest({ testCases });
