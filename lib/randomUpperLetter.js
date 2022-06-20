const randomUpperLetter = () => {
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomUpper =
    upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)];

  return randomUpper.toString();
};

console.log(randomUpperLetter());
console.log(randomUpperLetter());
console.log(randomUpperLetter());
console.log(randomUpperLetter());
console.log(randomUpperLetter());
console.log(randomUpperLetter());

module.exports = randomUpperLetter;
