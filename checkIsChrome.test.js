// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsChrome from "./checkIsChrome";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Chrome Browser",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser === "chrome";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Chrome Browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser !== "chrome";
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsChrome()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
