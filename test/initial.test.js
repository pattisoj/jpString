const initial = require("../lib/initial.js");

describe("initials", () => {
  it("Returns a string", () => {
    const actual = initial("Type Test");
    expect(typeof actual).toBe("string");
  });

  it.each([
    ["D", "Dave"],
    ["m", "mary"],
    ["JP", "Josh Pattison"],
    ["Js", "John smith"],
    ["lD", "lucy Davies"],
    ["mlk", "martin luther king"],
    ["MEA", "Minos Evalyn Aristide"],
    ["nLO", "narayan Leena Oda"],
    ["AmA", "Allan mokhmad Amadi"],
    ["SALH", "Sotos Augustina Larry Holtz"],
    ["GmlM", "Girish mahdi leia MacAngus"],
    ["dbtc", "dragoljub bakarne tressach cardona"],
    ["jArk", "julia Alba robert karppinen"],
    ["LFMw", "LI FaBIanA MaRijN wiBOwo"],
    ["BhAP", "BeRTA hAMzA AyokUnLE PaqUet"],
  ])(
    "initial should return %s when %s is submitted with no extra parameters",
    (expected, givenText) => {
      const actual = initial(givenText);
      expect(actual).toEqual(expected);
    }
  );

  it("Throws an error if the first argument is not a string", () => {
    const text = 1;
    expect(() => initial(text)).toThrow(
      TypeError("The first argument in initial needs to be a string")
    );
  });

  it("Throws an error if the second argument is not a boolean", () => {
    const text = "Random String";
    const capital = 1;
    expect(() => initial(text, capital)).toThrow(
      TypeError("The second argument in initial needs to be a boolean")
    );
  });
});
