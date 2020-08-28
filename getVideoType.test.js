// local modules - jest
const runTest = require("./jest/runTest");

// local files
const getVideoType = require("./getVideoType");

const testCases = [
  {
    describe: "should return video type",
    it: `if the argument is a valid url`,
    toBe: "video/mp4",
    cases: ["https://www.w3schools.com/html/mov_bbb.mp4"]
  },
  {
    describe: "should return empty string",
    it: "if can't match video type",
    toBe: "",
    cases: ["https://www.w3schools.com/test.jpg"]
  },
  {
    describe: "should throw an error",
    it: `if the argument is not string`,
    cases: [null, undefined, NaN, Infinity, 123, [], {}],
    handler: ({ item }) => {
      expect(() => {
        getVideoType(item);
      }).toThrow();
    }
  }
];

const handler = ({ testCase, item }) => {
  expect(getVideoType(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
