// local modules - jest
const runTest = require("../.jest/runTest");

// local files
const getNextIndexInArray = require("../getNextIndexInArray");

const exampleArray = ["a", "b", "c", "d", "e"];

const testCases = [
  {
    describe: "should return",
    it: "next index",
    cases: exampleArray,
    handler: ({ testCase, item: index }) => {
      const nextIndex = getNextIndexInArray({
        array: testCase.cases,
        index: index,
        isLoop: true
      });
      expect(nextIndex).toBe(
        index + 1 >= testCase.cases.length ? 0 : index + 1
      );
    }
  },
  {
    describe: "should return 0",
    it: "if index is less than 0",
    cases: exampleArray,
    handler: ({ testCase }) => {
      const nextIndex = getNextIndexInArray({
        array: testCase.cases,
        index: -2
      });
      expect(nextIndex).toBe(0);
    }
  },
  {
    describe: "should return -1",
    it: "if argument is last index",
    cases: exampleArray,
    handler: ({ testCase }) => {
      const nextIndex = getNextIndexInArray({
        array: testCase.cases,
        index: testCase.cases.length - 1,
        isLoop: false
      });
      expect(nextIndex).toBe(-1);
    }
  },
  {
    describe: "should throw an exception",
    it: "if there is an array has no item",
    handler: () => {
      expect(() => {
        getNextIndexInArray({
          array: []
        });
      }).toThrow();
    }
  }
];

runTest({ testCases });

module.exports = {
  testCases
};
