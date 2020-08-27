// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsWindows from "./checkIsWindows";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Windows",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.os === "windows";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Windows",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.os !== "windows";
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsWindows()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
