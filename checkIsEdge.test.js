// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import checkIsEdge from "./checkIsEdge";

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Edge Browser",
    toBe: true,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser === "edge";
    })
  },
  {
    describe: "should return false",
    it: "if userAgent is not Edge Browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.browser !== "edge";
    })
  }
];

const handler = ({ testCase, item }) => {
  mockUserAgent(item.userAgent);
  expect(checkIsEdge()).toBe(testCase.toBe);
};

runTest({ testCases, handler });
