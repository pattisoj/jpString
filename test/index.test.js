const {
  randomLowerLetter,
  initial,
  randomUpperLetter,
} = require("../index.js");
const indexObject = require("../index.js");

describe("index object", () => {
  test("IndexObject is an object", () => {
    expect(typeof indexObject).toBe("object");
  });
  test("IndexObject contains initial function", () => {
    expect(indexObject.initial).toEqual(initial);
  });
  test("IndexObject contains randomUpperLetter", () => {
    expect(indexObject.randomUpperLetter).toEqual(randomUpperLetter);
  });
  test("IndexObject contains randomLowerLetter", () => {
    expect(indexObject.randomLowerLetter).toEqual(randomLowerLetter);
  });
});
