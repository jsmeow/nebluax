const canvas = require('../../../../../canvas');
const Entity = require('../../../entity');
const imageSource =
  './main/entity/type/hud/bomb/assets/images/image-source.png';

function BombHud(entities) {
  Entity.call(this, {
    x: canvas.width - canvas.res * 112,
    y: canvas.res * 10,
    type: ['hud, bomb'],
    imageSource,
    entities
  });

  // The application player/user entity
  const player = entities[0];

  /** @override **/
  this.render = function() {
    this.loadImage();

    canvas.drawText({
      text: 'Bombs',
      x: this.pos.x + canvas.res * 2,
      y: this.pos.y,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawText({
      text: `${player.points.bomb}`,
      x: this.pos.x + canvas.res,
      y: this.pos.y + canvas.res * 10,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawImage({
      image: this.image,
      x: this.pos.x + canvas.res * 14,
      y: this.pos.y + canvas.res * 3,
      width: 30,
      height: 30
    });

    canvas.drawText({
      text: `${player.points.maxBomb}`,
      x: this.pos.x + canvas.res * 28,
      y: this.pos.y + canvas.res * 10,
      size: 25,
      fillStyle: '#ffffff'
    });
  };
}

BombHud.prototype = Object.create(Entity.prototype);

module.exports = BombHud;
