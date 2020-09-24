// local modules - jest
const runTest = require("./jest/runTest");

// local files
const getStringify = require("./getStringify");

const testCases = [
  {
    describe: "should return a string",
    it: "if the argument is an undefined",
    toBe: "undefined",
    cases: [undefined]
  },
  {
    describe: "should return a string",
    it: "if the argument is a number",
    toBe: "1.4564",
    cases: [1.4564]
  },
  {
    describe: "should return a string",
    it: "if the argument is an empty string",
    toBe: "",
    cases: [""]
  },
  {
    describe: "should return a string",
    it: "if the argument is a string",
    toBe: "Hello",
    cases: ["Hello"]
  },
  {
    describe: "should return a string",
    it: "if the argument is a function",
    toBe: `() => {
    console.log(123);
  }`,
    cases: [
      () => {
        console.log(123);
      }
    ]
  },
  {
    describe: "should return a string",
    it: "if the argument is an empty array",
    toBe: "[]",
    cases: [[]]
  },
  {
    describe: "should return a string",
    it: "if the argument is an array",
    toBe: `["", "123", 123, undefined, null, Infinity, NaN, true, false, {a: 123, b: undefined}, [1, 2, 3, undefined, {a: 123, b: undefined}]]`,
    cases: [
      [
        "",
        "123",
        123,
        undefined,
        null,
        Infinity,
        NaN,
        true,
        false,
        { a: 123, b: undefined },
        [1, 2, 3, undefined, { a: 123, b: undefined }]
      ]
    ]
  },
  {
    describe: "should return a string",
    it: "if the argument is an empty object",
    toBe: "{}",
    cases: [{}]
  },
  {
    describe: "should return a string",
    it: "if the argument is an object",
    toBe: `{a: 1, b: undefined, c: Infinity, d: NaN, e: [1, 2, 3, undefined, null, Infinity, {a: 123, b: undefined}], f: "123", g: ""}`,
    cases: [
      {
        a: 1,
        b: undefined,
        c: Infinity,
        d: NaN,
        e: [1, 2, 3, undefined, null, Infinity, { a: 123, b: undefined }],
        f: "123",
        g: ""
      }
    ]
  }
];

const handler = ({ testCase, item }) => {
  expect(getStringify(item)).toEqual(testCase.toBe);
};

runTest({ testCases, handler });

module.exports = {
  testCases,
  handler
};
