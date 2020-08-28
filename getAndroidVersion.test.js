// node modules
const userAgents = require("@letea/useragents");

// local modules - jest
const runTest = require("./jest/runTest");
const mockUserAgent = require("./jest/mockUserAgent");

// local files
const getAndroidVersion = require("./getAndroidVersion");

const testCases = [
  {
    describe: "should return true",
    it: "if userAgent is Android browser",
    cases: userAgents.filter(userAgent => {
      return userAgent.os === "android";
    }),
    handler: ({ item }) => {
      mockUserAgent(item.userAgent);
      expect(getAndroidVersion()).toBe(item.osVersion);
    }
  },
  {
    describe: "should return false",
    it: "if userAgent is not Android browser",
    cases: userAgents.filter(userAgent => {
      return userAgent.os !== "android";
    }),
    handler: ({ item }) => {
      mockUserAgent(item.userAgent);
      expect(getAndroidVersion()).toBe("");
    }
  }
];

runTest({ testCases });
