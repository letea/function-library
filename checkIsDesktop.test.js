// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsDesktop from "./checkIsDesktop";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Desktop",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return !!userAgent.os.match(/(macos)|(windows)/i);
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Desktop",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return !userAgent.os.match(/(macos)|(windows)/i);
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsDesktop()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
