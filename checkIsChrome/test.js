// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import checkIsChrome from "../checkIsChrome/index.js";
import setUserAgent from "../setUserAgent/index.js";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Chrome Browser",
    toBe: true,
    cases: userAgents.filter((userAgent) => {
      return userAgent.browser === "chrome";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Chrome Browser",
    toBe: false,
    cases: userAgents.filter((userAgent) => {
      return userAgent.browser !== "chrome";
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsChrome()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
