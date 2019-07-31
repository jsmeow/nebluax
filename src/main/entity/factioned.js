const canvas = require('../canvas');
const AggressiveEntity = require('./aggressive');

// An entity that can be affiliated with more than one faction.
function FactionedEntity({ x, y, width, height, entities, dx, dy, faction }) {
  AggressiveEntity.call(this, {
    x,
    y,
    width,
    height,
    entities,
    dx,
    dy
  });

  /** @override **/
  this.imageSrc = {
    ...this.imageSrc,
    enemy: null,
    allied: null
  };

  // Affiliated entity faction.
  this.faction = faction;
}

FactionedEntity.prototype = Object.create(AggressiveEntity.prototype);

// Types of factions.
FactionedEntity.factions = {
  ENEMY: 'enemy',
  ALLIED: 'allied'
};

/** @override **/
FactionedEntity.prototype.loadImage = function() {
  if (this.faction === FactionedEntity.factions.ENEMY) {
    this.image.src = this.imageSrc.enemy;
  } else if (this.faction === FactionedEntity.factions.ALLIED) {
    this.image.src = this.imageSrc.allied;
  }

  if (this.status.damaged) {
    this.image.src = this.imageSrc.damaged;
  } else if (this.status.powered) {
    this.image.src = this.imageSrc.powered;
  } else if (this.status.shielded) {
    this.image.src = this.imageSrc.shielded;
  }
};

/** @override **/
FactionedEntity.prototype.render = function() {
  this.loadImage();

  if (this.faction === FactionedEntity.factions.ENEMY) {
    canvas.drawImageRotated({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      degrees: Math.PI
    });
  } else if (this.faction === FactionedEntity.factions.ALLIED) {
    canvas.drawImage({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    });
  }
};

module.exports = FactionedEntity;
