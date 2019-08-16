const canvas = require('../../../../canvas');
const factory = require('../../../factory/factory-entity');
const Background = require('../background');

function Space() {
  Background.call(this);

  /** @override **/
  this.type = [...this.type, 'space'];

  // Background entities

  const blinkingStars = [...Array(20)].map(() => {
    return factory.background.space.blinkingStar();
  });

  /** @override **/
  this.entities = [...blinkingStars];

  /** @override **/
  this.render = function() {
    canvas.drawRect({
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      fillStyle: '#181818'
    });

    this.entities.forEach(entity => {
      entity.render();
    });
  };
}

Space.prototype = Object.create(Background.prototype);

module.exports = Space;
