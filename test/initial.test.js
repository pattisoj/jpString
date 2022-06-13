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
});
