// node modules
import userAgents from "@letea/useragents";

// local modules - jest
import runTest from "./jest/runTest";
import mockUserAgent from "./jest/mockUserAgent";

// local files
import getiOSVersion from "./getiOSVersion";

const testCases = [
  {
    describe: "should return a number",
    it: "if userAgent is iOS browser",
    cases: userAgents.filter(userAgent => {
      return userAgent.os === "ios";
    }),
    handler: ({ item }) => {
      mockUserAgent(item.userAgent);
      expect(getiOSVersion()).toBe(item.osVersion);
    }
  },
  {
    describe: "should return a empty string",
    it: "if userAgent is not iOS browser",
    toBe: false,
    cases: userAgents.filter(userAgent => {
      return userAgent.os !== "ios";
    }),
    handler: ({ item }) => {
      mockUserAgent(item.userAgent);
      expect(getiOSVersion()).toBe("");
    }
  }
];

runTest({ testCases });
