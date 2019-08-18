const canvas = require('../../../../canvas');
const Entity = require('../../../entity');
const imageSource =
  './main/entity/category/hud/health/assets/images/image-source.png';

function HealthHud(list) {
  Entity.call(this, {
    x: canvas.width * 0.5 - canvas.pixel * 17,
    y: canvas.pixel * 10,
    type: ['hud, health'],
    imageSource,
    list
  });

  // The game/application player/user entity
  const player = list[0];

  /** @override **/
  this.render = function() {
    this.loadImage();

    canvas.drawText({
      text: 'Health',
      x: this.x,
      y: this.y,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawText({
      text: `${player.points.health}`,
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
      text: `${player.points.maxHealth}`,
      x: this.x + canvas.pixel * 28,
      y: this.y + canvas.pixel * 10,
      size: 25,
      fillStyle: '#ffffff'
    });
  };
}

HealthHud.prototype = Object.create(Entity.prototype);

module.exports = HealthHud;
