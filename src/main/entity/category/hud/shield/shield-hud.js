const canvas = require('../../../../canvas/canvas');
const Entity = require('../../../entity');
const imageSource =
  './main/entity/category/hud/shield/assets/images/image-source.png';

function ShieldHud(entities) {
  Entity.call(this, {
    x: canvas.res * 80,
    y: canvas.res * 10,
    type: ['hud, shield'],
    imageSource,
    entities
  });

  // The application player/user entity
  const player = entities[0];

  /** @override **/
  this.render = function() {
    this.loadImage();

    canvas.drawText({
      text: 'Shields',
      x: this.pos.x - canvas.res * 2.5,
      y: this.pos.y,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawText({
      text: `${player.points.shield}`,
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
      text: `${player.points.maxShield}`,
      x: this.pos.x + canvas.res * 28,
      y: this.pos.y + canvas.res * 10,
      size: 25,
      fillStyle: '#ffffff'
    });
  };
}

ShieldHud.prototype = Object.create(Entity.prototype);

module.exports = ShieldHud;
