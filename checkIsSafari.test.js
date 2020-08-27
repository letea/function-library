// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsSafari from "./checkIsSafari";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Safari Browser",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser === "safari";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Safari Browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser !== "safari";
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsSafari()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
