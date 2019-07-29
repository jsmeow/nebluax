const canvas = require('../../canvas');
const Challenger = require('./challenger');

// An entity that can be affiliated with more than one faction.
function Faction({ x, y, width, height, faction }) {
  Challenger.call(this, { x, y, width, height });

  /** @override **/
  this.imageSrc = {
    ...this.imageSrc,
    enemy: null,
    allied: null
  };

  // Affiliated entity faction.
  this.faction = faction;
}

Faction.prototype = Object.create(Challenger.prototype);

// Types of factions.
Faction.factions = {
  ENEMY: 'enemy',
  ALLIED: 'allied'
};

/** @override **/
Faction.prototype.loadImage = function() {
  if (this.status.damaged) {
    this.image.src = this.imageSrc.damaged;
  } else if (this.status.powered) {
    this.image.src = this.imageSrc.powered;
  } else if (this.faction === Faction.factions.ENEMY) {
    this.image.src = this.imageSrc.enemy;
  } else if (this.faction === Faction.factions.ALLIED) {
    this.image.src = this.imageSrc.allied;
  }
};

/** @override **/
Faction.prototype.render = function() {
  if (this.faction === Faction.factions.ENEMY) {
    canvas.drawImageRotated({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      degrees: Math.PI
    });
  } else if (this.faction === Faction.factions.ALLIED) {
    canvas.drawImage({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    });
  }
};

module.exports = Faction;
