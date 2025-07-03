// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getIntersectionArray from "../getIntersectionArray/index.js";

const testCases = [
  {
    describe: "should return",
    it: "an intersection array",
    handler: () => {
      expect(
        getIntersectionArray({
          array1: ["a", "b", "c"],
          array2: ["b", "c", "d", "e", "f"]
        })
      ).toMatchObject(["b", "c"]);
    }
  },
  {
    describe: "should return an empty array",
    it: "if one of the argument are empty array",
    handler: () => {
      expect(
        getIntersectionArray({ array1: ["a", "b", "c"], array2: [] })
      ).toMatchObject([]);

      expect(
        getIntersectionArray({
          array1: ["a", "b", "c"],
          array2: "This is a string."
        })
      ).toMatchObject([]);

      expect(getIntersectionArray()).toMatchObject([]);
    }
  }
];

runTest({ testCases });

export { testCases
 };
