const randomLowerLetter = require("../lib/randomLowerLetter.js");

describe("random lower letter", () => {
  test("returns string", () => {
    const actual = randomLowerLetter();
    expect(typeof actual).toBe("string");
  });

  test("returns string of length 1", () => {
    const actual = randomLowerLetter();
    expect(actual.length).toEqual(1);
  });
});
