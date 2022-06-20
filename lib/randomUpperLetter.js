const randomUpperLetter = () => {
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomUpper =
    upperAlphabet[Math.floor(Math.random() * alphabet.length)];

  return randomUpper.toString();
};

module.exports = randomUpperLetter;
