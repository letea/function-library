// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getStringWithSpaceBetweenHalfAndFullWidth from "../getStringWithSpaceBetweenHalfAndFullWidth/index.js";

const testCases = [
  {
    describe: "should return a string",
    it: "with space between half and full with.",
    handler: () => {
      const string = getStringWithSpaceBetweenHalfAndFullWidth(
        "我是很busy，因為我很多things要do"
      );
      expect(string).toBe("我是很 busy，因為我很多 things 要 do");
    }
  },
  {
    describe: "should throw an Error",
    it: "if the argument is not a string",
    cases: [-1, 0.5, 10.5, NaN, Infinity, {}, []],
    handler: ({ item }) => {
      expect(() => {
        getStringWithSpaceBetweenHalfAndFullWidth(item);
      }).toThrow();
    }
  }
];

runTest({ testCases });

export { testCases
 };
