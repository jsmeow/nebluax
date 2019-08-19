const canvas = require('../../../../canvas');
const Entity = require('../../../entity');
const imageSource =
  './main/entity/category/hud/bomb/assets/images/image-source.png';

function BombHud(list) {
  Entity.call(this, {
    x: canvas.width - canvas.pixel * 112,
    y: canvas.pixel * 10,
    type: ['hud, bomb'],
    imageSource,
    list
  });

  // The game/application player/user entity
  const player = list[0];

  /** @override **/
  this.render = function() {
    this.loadImage();

    canvas.drawText({
      text: 'Bombs',
      x: this.pos.x + canvas.pixel * 2,
      y: this.pos.y,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawText({
      text: `${player.points.bomb}`,
      x: this.pos.x + canvas.pixel,
      y: this.pos.y + canvas.pixel * 10,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawImage({
      image: this.image,
      x: this.pos.x + canvas.pixel * 14,
      y: this.pos.y + canvas.pixel * 3,
      width: 30,
      height: 30
    });

    canvas.drawText({
      text: `${player.points.maxBomb}`,
      x: this.pos.x + canvas.pixel * 28,
      y: this.pos.y + canvas.pixel * 10,
      size: 25,
      fillStyle: '#ffffff'
    });
  };
}

BombHud.prototype = Object.create(Entity.prototype);

module.exports = BombHud;
