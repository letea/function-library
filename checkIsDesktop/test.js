// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import checkIsDesktop from "../checkIsDesktop/index.js";
import setUserAgent from "../setUserAgent/index.js";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Desktop",
    toBe: true,
    cases: userAgents.filter((userAgent) => {
      return !!userAgent.os.match(/(macos)|(windows)/i);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Desktop",
    toBe: false,
    cases: userAgents.filter((userAgent) => {
      return !userAgent.os.match(/(macos)|(windows)/i);
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsDesktop()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
