// Perform movement in a vector directions dx, dy with vector magnitude speed
function move() {
  this.pos.x = this.pos.x + this.vector.dx * this.vector.speed;
  this.pos.y = this.pos.y + this.vector.dy * this.vector.speed;
}

module.exports = move;
