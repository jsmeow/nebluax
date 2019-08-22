const canvas = require('../../../../canvas');
const Entity = require('../../../entity');
const imgSrc =
  './main/entity/category/hud/life/assets/images/image-source.png';

function LifeHud(entities) {
  Entity.call(this, {
    x: canvas.res * 17,
    y: canvas.res * 10,
    type: ['hud, life'],
    imgSrc,
    entities
  });

  // The application player/user entity
  const player = entities[0];

  /** @override **/
  this.render = function() {
    this.loadImage();

    canvas.drawText({
      text: 'Lives',
      x: this.pos.x + canvas.res * 2,
      y: this.pos.y,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawText({
      text: `${player.points.life}`,
      x: this.pos.x + canvas.res,
      y: this.pos.y + canvas.res * 10,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawImage({
      img: this.img,
      x: this.pos.x + canvas.res * 14,
      y: this.pos.y + canvas.res * 3,
      width: 30,
      height: 30
    });

    canvas.drawText({
      text: `${player.points.maxLife}`,
      x: this.pos.x + canvas.res * 28,
      y: this.pos.y + canvas.res * 10,
      size: 25,
      fillStyle: '#ffffff'
    });
  };
}

LifeHud.prototype = Object.create(Entity.prototype);

module.exports = LifeHud;
