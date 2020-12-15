// node modules
const checkIsArrayTest = require("../checkIsArray.test");
const getRandomValueInArrayTest = require("../getRandomValueInArray.test");
const getRandomIndexInArrayTest = require("../getRandomIndexInArray.test");
const getNextIndexInArrayTest = require("../getNextIndexInArray.test");
const checkIsArrayEmptyTest = require("../checkIsArrayEmpty.test");
const getUniqueArrayTest = require("../getUniqueArray.test");
const getIntersectionArrayTest = require("../getIntersectionArray.test");
const getTrulyArrayTest = require("../getTrulyArray.test");
const getReverseArrayTest = require("../getReverseArray.test");
const getShuffleArrayTest = require("../getShuffleArray.test");
const getSortedArrayTest = require("../getSortedArray.test");
const getUniqueValuesFromArrayTest = require("../getUniqueValuesFromArray.test");
const getDuplicateValuesFromArrayTest = require("../getDuplicateValuesFromArray.test");

const arrayFunctions = [
  {
    title: "getRandomValueInArray",
    description: "Get a random value from the array.",
    arguments: `
      array = []; // required
    `,
    usage: `
      const array = [1, 2, 3, 4, 5];

      getRandomValueInArray(array);
    `,
    test: getRandomValueInArrayTest
  },
  {
    title: "getRandomIndexInArray",
    description: "Get a random index from the array.",
    arguments: `
      array = []; // required
    `,
    usage: `
      const array = ["a", "b", "c", "d", "e"];

      getRandomIndexInArray(array);
    `,
    test: getRandomIndexInArrayTest
  },
  {
    title: "getNextIndexInArray",
    description:
      "Set an array and index to get the next index. Using isLoop to get the first index if the index of input is the last one.",
    arguments: `
      arguments = {
        array: [], // required
        index: 0, // optional
        isLoop: false // optional
      }
    `,
    usage: `
    const array = ["a", "b", "c", "d", "e"];

    getNextIndexInArray({
      array,
      index: 2
    })
    // 3

    getNextIndexInArray({
      array,
      index: 4
    })
    // -1

    getNextIndexInArray({
      array,
      index: 4,
      isLoop: true
    })
    // 0
  `,
    test: getNextIndexInArrayTest
  },
  {
    title: "checkIsArray",
    description: "Check data type is an array or not.",
    arguments: `
      value // required, any type is accepted.
    `,
    usage: `
      checkIsArray([1, 2, 3]);
      // true

      checkIsArray("abc");
      // false
    `,
    test: checkIsArrayTest
  },
  {
    title: "checkIsArrayEmpty",
    description: "Check the array is empty or not.",
    arguments: `
      array = []; // required
    `,
    usage: `
      checkIsArrayEmpty([])
      // true

      checkIsArrayEmpty([1,2,3])
      // false
    `,
    test: checkIsArrayEmptyTest
  },
  {
    title: "getUniqueArray",
    description: "Get a unique array.",
    arguments: `
      array = []; // required
    `,
    usage: `
      getUniqueArray([1, 2, 3, "a", "b", 2, "c", "a"]);
      // [1, 2, 3, "a", "b", "c"]
    `,
    test: getUniqueArrayTest,
    references: [
      {
        title: "uniqueElements - 30 seconds of code",
        url: "https://www.30secondsofcode.org/js/s/unique-elements/"
      }
    ]
  },
  {
    title: "getIntersectionArray",
    description: "Get an intersection array.",
    arguments: `
      arguments = {
        array1: [], // required
        array2: [] // required
      }
    `,
    usage: `
      getIntersectionArray({
        array1: ["a", "b", "c"],
        array2: ["b", "c", "d", "e", "f"]
      })
      // ["b", "c"]
    `,
    test: getIntersectionArrayTest,
    references: [
      {
        title: "一些JS 數組精簡技巧，要記好筆記了",
        url: "https://segmentfault.com/a/1190000021840363"
      }
    ]
  },
  {
    title: "getTrulyArray",
    description: "Get an array with true values.",
    arguments: `
      array = []; // required
    `,
    usage: `
      const array = [0, "test", "", NaN, 9, true, undefined, false, Infinity, {}, []];

      getTrulyArray(array);
      // ["test", 9, true, Infinity, {}, []]
    `,
    test: getTrulyArrayTest,
    notes: ["Infinity is a true value."],
    references: [
      {
        title: "一些JS 數組精簡技巧，要記好筆記了",
        url: "https://segmentfault.com/a/1190000021840363"
      }
    ]
  },
  {
    title: "getReverseArray",
    description: "Get an array with reversed.",
    arguments: `
      array = []; // required

    `,
    usage: `
      const array = [1, 2, 3, 4, 5];

      getReverseArray(array);
      // [5, 4, 3, 2 ,1]
    `,
    test: getReverseArrayTest
  },
  {
    title: "getShuffleArray",
    description: "Get an array with shuffled.",
    arguments: `
      array = []; // required
    `,
    usage: `
      const array = [1, 2, 3, 4, 5];

      getShuffleArray(array);
      // [5, 3, 2, 1, 4]...
    `,
    test: getShuffleArrayTest
  },
  {
    title: "getSortedArray",
    description: "Get a sorted array.",
    arguments: `
      array = []; // required
    `,
    usage: `
      const array = [5, 3, 2, 1, 4];

      getSortedArray(array);
      // [1, 2, 3, 4, 5]
    `,
    test: getSortedArrayTest
  },
  {
    title: "getUniqueValuesFromArray",
    description: "Get an array with unique values from the original array.",
    arguments: `
      array = []; // required
    `,
    usage: `
      const array = [1, 2, 3, 2, 3, 4, 5];

      getUniqueValuesFromArray(array);
      // [1, 4, 5]
    `,
    test: getUniqueValuesFromArrayTest
  },
  {
    title: "getDuplicateValuesFromArray",
    description: "Get an array with duplicate values from the original array.",
    arguments: `
      array = []; // required
    `,
    usage: `
      const array = [1, 2, 3, 2, 3, 4, 5];

      getDuplicateValuesFromArray(array);
      // [2, 3]
    `,
    test: getDuplicateValuesFromArrayTest
  }
];

arrayFunctions.kind = "Array";

module.exports = arrayFunctions;
