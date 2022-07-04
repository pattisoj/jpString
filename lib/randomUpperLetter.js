const randomUpperLetter = () => {
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomUpper =
    upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)];

  return randomUpper.toString();
};

module.exports = randomUpperLetter;
