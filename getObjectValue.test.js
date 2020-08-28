// local modules - jest
const runTest = require("./jest/runTest");

// local files
const getObjectValue = require("./getObjectValue");

const example = {
  a: 1,
  b: {
    c: 2,
    d: [3, { e: 4 }]
  }
};

const testCases = [
  {
    describe: "should return",
    it: "a value from example",
    handler: () => {
      expect(
        getObjectValue({
          object: example,
          keys: "a"
        })
      ).toBe(1);

      expect(
        getObjectValue({
          object: example,
          keys: "b.c"
        })
      ).toBe(2);

      expect(
        getObjectValue({
          object: example,
          keys: "b.d[0]"
        })
      ).toBe(3);

      expect(
        getObjectValue({
          object: example,
          keys: "b.d[1].e"
        })
      ).toBe(4);
    }
  },
  {
    describe: "should return undefined",
    it: "if can't find the value",
    handler: () => {
      expect(
        getObjectValue({
          object: example,
          keys: "b.d[1].e.f"
        })
      ).toBeUndefined();
    }
  },
  {
    describe: "should return undefined",
    it: "if argument is not an object",
    handler: () => {
      expect(
        getObjectValue({
          object: []
        })
      ).toBeUndefined();
    }
  }
];

runTest({ testCases });
