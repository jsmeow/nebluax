// Returns a x, y, point collision assertion for each cardinal direction.
function validatePointCollision() {
  return {
    left: x => {
      return this.x <= x;
    },
    right: x => {
      return this.x >= x;
    },
    up: y => {
      return this.y <= y;
    },
    down: y => {
      return this.y >= y;
    }
  };
}

module.exports = validatePointCollision;
