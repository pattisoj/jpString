const initial = (text, capital) => {
  if (typeof text !== "string") {
    throw new TypeError("The first argument in initial needs to be a string");
  }

  let initials = text.match(/(\b\S)?/g).join("");

  if (capital === true || capital === false) {
    if (capital === false) {
      return initials.toLowerCase();
    } else {
      return initials.toUpperCase();
    }
  }

  return initials;
};

module.exports = initial;
