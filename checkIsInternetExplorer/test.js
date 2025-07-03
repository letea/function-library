// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
import runTest from "../.jest/runTest.js";

// local files
import checkIsInternetExplorer from "../checkIsInternetExplorer/index.js";
import setUserAgent from "../setUserAgent/index.js";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Internet Explorer browser",
    toBe: true,
    cases: userAgents.filter((userAgent) => {
      return !!userAgent.browser.match(/internet explorer/);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Internet Explorer browser",
    toBe: false,
    cases: userAgents.filter((userAgent) => {
      return !userAgent.browser.match(/internet explorer/);
    })
  }
];

const handler = ({ testCase, item }) => {
  setUserAgent(item.userAgent);
  expect(checkIsInternetExplorer()).toBe(testCase.toBe);
};

runTest({ testCases, handler });

export { testCases,
  handler
 };
