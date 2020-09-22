// local modules - jest
const runTest = require("./jest/runTest");

// local files
const checkIsMobileNumberValid = require("./checkIsMobileNumberValid");

const testCases = [
  {
    describe: "should return true",
    it: "if the mobile number is valid",
    toBe: true,
    cases: [
      "0912345678",
      "0912-345-678",
      "+8860912345678",
      "+886912345678",
      "+886912-345-678"
    ]
  },
  {
    describe: "should return false",
    it: "if the mobile number isn't valid",
    toBe: false,
    cases: [
      undefined,
      "09",
      "091234567",
      "0912-345",
      "09123-45-678",
      "0912345-678",
      "0912-345678",
      "+88609",
      "+886091234567",
      "+8860912-34567"
    ]
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsMobileNumberValid(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
