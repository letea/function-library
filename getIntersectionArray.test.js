// local modules - jest
import runTest from "./jest/runTest";

// local files
import getIntersectionArray from "./getIntersectionArray";

const array1 = ["a", "b", "c"];
const array2 = ["b", "c", "d", "e", "f"];
const expectArray = ["b", "c"];

const testCases = [
  {
    describe: "should return",
    it: "an intersection array",
    handler: () => {
      expect(getIntersectionArray({ array1, array2 })).toEqual(
        expect.arrayContaining(expectArray)
      );
    }
  },
  {
    describe: "should return an empty array",
    it: "if one of the argument are empty array",
    handler: () => {
      expect(getIntersectionArray({ array1, array2: [] })).toEqual(
        expect.arrayContaining([])
      );

      expect(
        getIntersectionArray({ array1, array2: "This is a string." })
      ).toEqual(expect.arrayContaining([]));

      expect(getIntersectionArray()).toEqual(expect.arrayContaining([]));
    }
  }
];

runTest({ testCases });
