const randomLowerLetter = () => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomLower =
    lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)];

  return randomLower.toString();
};

module.exports = randomLowerLetter;
