// Returns a x, y, point collision assertion for each cardinal direction.
function assertPointCollision() {
  return {
    left: x => {
      return this.pos.x <= x;
    },
    right: x => {
      return this.pos.x >= x;
    },
    up: y => {
      return this.pos.y <= y;
    },
    down: y => {
      return this.pos.y >= y;
    }
  };
}

module.exports = assertPointCollision;
