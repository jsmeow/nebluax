const canvas = require('../../canvas');
const Challenger = require('./challenger');

// An entity with the ability to perform roaming.
function Ship({ x, y, width, height, faction }) {
  Challenger.call(this, { x, y, width, height });

  // The image sources used by this entity.
  // To be provided by the extending class.
  /** @override **/
  this.imageSrc = {
    ...this.imageSrc,
    enemy: null,
    allied: null
  };

  // Faction
  // ENEMY: 0,
  // ALLIED: 1
  this.faction = faction;

  /** @override **/
  this.status = {
    ...this.status,
    roaming: false
  };

  /** @override **/
  this.timers = {
    ...this.timers,
    // Roaming movement.
    roaming: {
      magnitude: 0.1,
      timer: 0,
      delay: 500,
      startTimer: (fn, resolve) => {
        // Begin the timer.
        this.timers.roaming.timer = setInterval(() => {
          if (fn) {
            fn().then(() => {
              resolve();
            });
          } else {
            resolve();
          }
        }, this.timers.roaming.delay);
      },
      clearTimer: () => {
        window.clearTimeout(this.timers.roaming.timer);
      }
    }
  };
}

Ship.prototype = Object.create(Challenger.prototype);

// Types of factions.
Ship.factions = {
  ENEMY: 0,
  ALLIED: 1
};

/** @override **/
Ship.prototype.loadImage = function() {
  if (this.status.damaged) {
    this.image.src = this.imageSrc.damaged;
  } else if (this.status.powered) {
    this.image.src = this.imageSrc.powered;
  } else if (this.faction === Ship.factions.ENEMY) {
    this.image.src = this.imageSrc.enemy;
  } else if (this.faction === Ship.factions.ALLIED) {
    this.image.src = this.imageSrc.allied;
  }
};

// Roam in place action.
Ship.prototype.roam = function({ dx, dy }) {
  // Move at roaming vector magnitude.
  return this.movePoint({
    x: this.position.x + dx,
    y: this.position.y + dy,
    magnitude: this.roaming.magnitude
  });
};

// Queue roaming in place actions.
Ship.prototype.roaming = function() {
  // Queue a roam promise.
  const promise = fn => {
    return new Promise(resolve => {
      // Start roam timeout.
      this.timers.roaming.startTimer(fn, resolve);
    });
  };
  // Execute roam promises.
  return new Promise(resolve => {
    // Start roaming.
    this.roam({ dx: -15, dy: 0 })
      .then(() => promise(this.roam({ dx: 30, dy: 0 })))
      .then(() => promise(this.roam({ dx: -15, dy: 0 })))
      .then(() => promise())
      .then(() => {
        resolve();
      });
  });
};

// Perform a wild action after done roaming.
// To be implemented by the extending class.
Ship.prototype.wild = function() {
  // ...implementation
};

// Loop the actions taken while the entity is in play.
Ship.prototype.loop = function() {
  if (!this.timers.roaming) {
    // Roam in place.
    this.roaming()
      // Do wild action if not in idle status.
      .then(() => {
        return this.status.idle ? Promise.resolve() : this.wild();
      })
      // Repeat.
      .then(() => {
        return this.loop();
      });
  }
  return Promise.resolve();
};

/** @override **/
Ship.prototype.render = function() {
  if (this.faction === Ship.factions.ENEMY) {
    canvas.drawImageRotated({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      degrees: Math.PI
    });
  } else if (this.faction === Ship.factions.ALLIED) {
    canvas.drawImage({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    });
  }
};

module.exports = Ship;
