// Get a random integer number within a range
function getRandomRangedInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = getRandomRangedInt;
