// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import checkIsEdge from "../checkIsEdge/index.js";
import setUserAgent from "../setUserAgent/index.js";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Edge Browser",
    toBe: true,
    cases: userAgents.filter((userAgent) => {
      return userAgent.browser === "edge";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Edge Browser",
    toBe: false,
    cases: userAgents.filter((userAgent) => {
      return userAgent.browser !== "edge";
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsEdge()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
