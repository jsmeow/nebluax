// Get a random floating point number within a range
function getRandomRangedFloat(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = getRandomRangedFloat;
