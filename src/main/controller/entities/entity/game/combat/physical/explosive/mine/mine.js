const { fps } = require('../../../../options');
const Explosive = require('../explosive');

function Mine({
  x,
  y,
  width,
  height,
  speed,
  dx,
  dy,
  faction,
  imageSource,
  degrees,
  creator,
  factory,
  entities
}) {
  Explosive.call(this, {
    x,
    y,
    width,
    height,
    speed,
    dx,
    dy,
    faction,
    imageSource,
    degrees,
    creator,
    factory,
    entities
  });

  /** @override **/
  this.props.type = [...this.props.type, 'mine'];

  /** @override **/
  this.animationTimer.delay = fps * 0.5;

  // Decrement vector movement acceleration timer
  this.accelerationTimer = {
    initialSpeed: this.vector.dy,
    step: 0,
    stepSize: 0.02,
    update: true
  };

  // Update the decrement vector movement acceleration timer and entity vector
  // Movement magnitude
  this.updateAccelerationTimer = function() {
    if (
      Math.abs(this.accelerationTimer.step) >=
      Math.abs(this.accelerationTimer.initialSpeed)
    ) {
      this.speed = 0;
      this.vector.dy = 0;
      this.vector.dy = 0;
      this.accelerationTimer.frame = 0;
      this.accelerationTimer.step = 0;
      this.accelerationTimer.update = false;
    } else {
      this.accelerationTimer.frame = this.accelerationTimer.frame + 1;
    }
  };

  // Update the decrement vector movement acceleration timer  step
  this.updateAccelerationStep = function() {
    this.accelerationTimer.step =
      this.accelerationTimer.step +
      this.accelerationTimer.initialSpeed * this.accelerationTimer.stepSize;

    if (this.vector.dy > 0) {
      this.vector.dy = this.vector.dy - this.accelerationTimer.stepSize;
    } else if (this.vector.dy < 0) {
      this.vector.dy = this.vector.dy + this.accelerationTimer.stepSize;
    }
  };

  /** @override **/
  this.updateTimers = function() {
    if (this.accelerationTimer.update) {
      this.updateAccelerationTimer();
      this.updateAccelerationStep();
    }
  };
}

Mine.prototype = Object.create(Explosive.prototype);

module.exports = Mine;
