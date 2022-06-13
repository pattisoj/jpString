const initial = require("../lib/initial.js");

describe("initials", () => {
  it("Initial returns a string", () => {
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
    "Initial should return %s when %s is submitted with no extra parameters",
    (expected, givenText) => {
      const actual = initial(givenText);
      expect(actual).toEqual(expected);
    }
  );

  it.each([
    ["M", "mary", true],
    ["JP", "Josh Pattison", true],
    ["JS", "John smith", true],
    ["NLO", "narayan Leena Oda", true],
    ["AMA", "Allan mokhmad Amadi", true],
    ["SALH", "Sotos Augustina Larry Holtz", true],
    ["BHAP", "BeRTA hAMzA AyokUnLE PaqUet", true],
    ["m", "mary", false],
    ["jp", "Josh Pattison", false],
    ["js", "John smith", false],
    ["nlo", "narayan Leena Oda", false],
    ["ama", "Allan mokhmad Amadi", false],
    ["salh", "Sotos Augustina Larry Holtz", false],
    ["bhap", "BeRTA hAMzA AyokUnLE PaqUet", false],
  ])(
    "Initial should return %s when %s is submitted with capital set to %s",
    (expected, givenText, capitalization) => {
      const actual = initial(givenText, capitalization);
      expect(actual).toEqual(expected);
    }
  );

  it.each([
    ["1P", "1josh Pattison"],
    ["d1", "$dave 1h7263Kl %^&"],
    ["Kr", "$%^&* King random"],
    ["h13", "hello 1joe $3Msas"],
    ["123", "1dsjhd 2hdsfhj £$3"],
    ["JP", "Josh . Pattison"],
    ["J.P", "Josh.Pattison"],
    ["J.P", "Josh. Pattison"],
    ["JP", "Josh , Pattison"],
    ["J,P", "Josh,Pattison"],
    ["J,P", "Josh, Pattison"],
  ])(
    "Initial should ignore special characters and space (. ,) appropriately returning %s when given %s",
    (expected, givenText) => {
      const actual = initial(givenText);
      expect(actual).toBe(expected);
    }
  );

  it("Ignores none boolean arguments for capital and returns unedited initials", () => {
    const expected = "RS";
    const actual = initial("Random String", 1);
    expect(actual).toBe(expected);
  });

  it("Throws an error if the first argument is not a string", () => {
    const text = 1;
    expect(() => initial(text)).toThrow(
      TypeError("The first argument in initial needs to be a string")
    );
  });
});
