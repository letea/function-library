// local modules - jest
import runTest from "./jest/runTest";

// local files
import getRandomNumber from "./getRandomNumber";

const testCases = [
  {
    describe: "should return",
    it: "a number between 5 to 10",
    handler: () => {
      for (let i = 0; i < 100; i++) {
        const number = getRandomNumber({
          minNumber: 5,
          maxNumber: 10
        });
        expect(number).toBeGreaterThanOrEqual(5);
        expect(number).toBeLessThanOrEqual(10);
      }
    }
  },
  {
    describe: "should return",
    it: "a float number",
    handler: () => {
      for (let i = 0; i < 100; i++) {
        const number = getRandomNumber({
          minNumber: 0,
          maxNumber: 10,
          isFloat: true
        });
        expect(number % 1 !== 0).toBe(true);
      }
    }
  },
  {
    describe: "should throw an exception",
    it: "if there is no argument",
    handler: () => {
      expect(() => {
        getRandomNumber();
      }).toThrow();
    }
  },
  {
    describe: "should throw an exception",
    it: "if minNumber is greater than maxNumber",
    handler: () => {
      expect(() => {
        getRandomNumber({
          minNumber: 10,
          maxNumber: 0
        });
      }).toThrow();
    }
  },
  {
    describe: "should throw an exception",
    it: "if minNumber or maxNumber is not a number",
    handler: () => {
      expect(() => {
        getRandomNumber({
          minNumber: "baba"
        });
      }).toThrow();

      expect(() => {
        getRandomNumber({
          maxNumber: {}
        });
      }).toThrow();
    }
  }
];

runTest({ testCases });
