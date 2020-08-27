// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsSamsungBrowser from "./checkIsSamsungBrowser";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Samsung Browser",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser === "samsung";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Samsung Browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser !== "samsung";
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsSamsungBrowser()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
