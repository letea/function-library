// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");
const mockUserAgent = require("./jest/mockUserAgent");

// local files
const getiOSVersion = require("./getiOSVersion");

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
