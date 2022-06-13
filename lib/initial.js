const initial = (text, capital) => {
  let initials = text.match(/(\b\S)?/g).join("");

  if (capital == true) {
    return initials.toUpperCase();
  }
  if (capital == false) {
    return initials.toLowerCase();
  }

  return initials;
};

module.exports = initial;
