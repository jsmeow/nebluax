const canvas = require('../../../../canvas');
const Entity = require('../../../entity');
const imageSource =
  './main/entity/category/hud/shield/assets/images/image-source.png';

function ShieldHud(list) {
  Entity.call(this, {
    x: canvas.pixel * 80,
    y: canvas.pixel * 10,
    type: ['hud, shield'],
    imageSource,
    list
  });

  // The game/application player/user entity
  const player = list[0];

  /** @override **/
  this.render = function() {
    this.loadImage();

    canvas.drawText({
      text: 'Shields',
      x: this.x - canvas.pixel * 2.5,
      y: this.y,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawText({
      text: `${player.points.shield}`,
      x: this.x + canvas.pixel,
      y: this.y + canvas.pixel * 10,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawImage({
      image: this.image,
      x: this.x + canvas.pixel * 14,
      y: this.y + canvas.pixel * 3,
      width: 30,
      height: 30
    });

    canvas.drawText({
      text: `${player.points.maxShield}`,
      x: this.x + canvas.pixel * 28,
      y: this.y + canvas.pixel * 10,
      size: 25,
      fillStyle: '#ffffff'
    });
  };
}

ShieldHud.prototype = Object.create(Entity.prototype);

module.exports = ShieldHud;
