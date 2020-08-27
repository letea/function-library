// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsInAppBrowserByLine from "./checkIsInAppBrowserByLine";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is InApp browser by Line",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser === "line";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not InApp browser by Line",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser !== "line";
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsInAppBrowserByLine()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
