// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getRandomIndexInArray from "../getRandomIndexInArray/index.js";

const testCases = [
  {
    describe: "should return an index",
    it: "from exampleArray",
    handler: () => {
      const exampleArray = ["a", "b", "c", "d", "e"];

      for (let i = 0; i < 100; i++) {
        const index = getRandomIndexInArray(exampleArray);
        expect(index).toBeGreaterThanOrEqual(0);
        expect(index).toBeLessThan(exampleArray.length);
      }
    }
  },
  {
    describe: "should return -1",
    it: "if array is empty",
    handler: () => {
      const index = getRandomIndexInArray([]);
      expect(index).toBe(-1);
    }
  },
  {
    describe: "should throw an exception",
    it: "argument is not an array",
    handler: () => {
      expect(() => {
        getRandomIndexInArray(0);
      }).toThrow();
    }
  }
];

runTest({ testCases });

export { testCases
 };
