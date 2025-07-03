// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import checkIsMac from "../checkIsMac/index.js";
import setUserAgent from "../setUserAgent/index.js";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Mac",
    toBe: true,
    cases: userAgents.filter((userAgent) => {
      return userAgent.os === "macos";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Mac",
    toBe: false,
    cases: userAgents.filter((userAgent) => {
      return userAgent.os !== "macos";
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsMac()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
