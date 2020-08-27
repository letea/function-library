// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsMac from "./checkIsMac";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Mac",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.os === "macos";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Mac",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.os !== "macos";
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsMac()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
