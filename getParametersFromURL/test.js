// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import getParametersFromURL from "../getParametersFromURL/index.js";

const testCases = [
  {
    describe: "should return an object with parameters",
    it: "if the argument is valid.",
    handler: () => {
      expect(getParametersFromURL("http://example.com/?a=1")).toEqual(
        expect.objectContaining({
          a: expect.anything()
        })
      );

      expect(getParametersFromURL("http://example.com/?a=1&b=2&c=3")).toEqual(
        expect.objectContaining({
          a: expect.anything(),
          b: expect.anything(),
          c: expect.anything()
        })
      );

      expect(getParametersFromURL("?a=1")).toEqual(
        expect.objectContaining({
          a: expect.anything()
        })
      );

      expect(getParametersFromURL("?a=1&b=2&c=3")).toEqual(
        expect.objectContaining({
          a: expect.anything(),
          b: expect.anything(),
          c: expect.anything()
        })
      );

      expect(getParametersFromURL("?a=%E5%80%BC")).toEqual(
        expect.objectContaining({
          a: "值"
        })
      );
    }
  },
  {
    describe: "should return a empty object",
    it: "if there is no search",
    handler: () => {
      expect(getParametersFromURL("http://example.com/")).toEqual({});
    }
  }
];

runTest({ testCases });

export { testCases
 };
