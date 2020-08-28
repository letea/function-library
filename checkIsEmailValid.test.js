// local modules - jest
const runTest = require("./jest/runTest");

// local files
const checkIsEmailValid = require("./checkIsEmailValid");

const testCases = [
  {
    describe: "should return true",
    it: "if the email is valid",
    toBe: true,
    cases: [
      "geon@ihateregex.io",
      "test@gmail.com",
      "mail@test.org",
      "mail@testing.com"
    ]
  },
  {
    describe: "should return false",
    it: "if the email isn't valid",
    toBe: false,
    cases: ["hello@", "@test", "email@gmail", "theproblem@"]
  }
];

const handler = ({ testCase, item }) => {
  expect(checkIsEmailValid(item)).toBe(testCase.toBe);
};

runTest({ testCases, handler });
