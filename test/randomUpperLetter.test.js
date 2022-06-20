const randomUpperLetter = require("../lib/randomUpperLetter.js");

describe("random upper letter", () => {
  test("returns string", () => {
    const actual = randomUpperLetter();
    expect(typeof actual).toBe("string");
  });

  test("returns string of length 1", () => {
    const actual = randomUpperLetter();
    expect(actual.length).toEqual(1);
  });
});
