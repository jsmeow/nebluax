// Get a random floating point number within a range
function getRandomRangedFloat(min, max) {
  return Math.random() * (max - min + 1) + min;
}

module.exports = getRandomRangedFloat;
