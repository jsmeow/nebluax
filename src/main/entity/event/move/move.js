// Perform movement in a vector direction with magnitude dx, dy multiplied by
// The entity speed.
function move() {
  this.x = this.x + this.speed * this.dx;
  this.y = this.y + this.speed * this.dy;
}

module.exports = move;
