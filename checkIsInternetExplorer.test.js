// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsInternetExplorer from "./checkIsInternetExplorer";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Internet Explorer browser",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return !!userAgent.browser.match(/internet explorer/);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Internet Explorer browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return !userAgent.browser.match(/internet explorer/);
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsInternetExplorer()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
