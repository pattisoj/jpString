const initial = (text, capital) => {
  if (typeof text !== "string") {
    throw new TypeError("The first argument in initial needs to be a string");
  }

  let initials = text.match(/(\b\S)?/g).join("");

  if (capital) {
    if (typeof capital !== "boolean") {
      throw new TypeError(
        "The second argument in initial needs to be a boolean"
      );
    }
    if (capital == true) {
      return initials.toUpperCase();
    } else {
      return initials.toLowerCase();
    }
  }

  return initials;
};

module.exports = initial;
