const canvas = require('../../../../canvas');
const Entity = require('../../../entity');

function ScoreHud(list) {
  Entity.call(this, {
    x: canvas.width - canvas.pixel * 50,
    y: canvas.pixel * 10,
    type: ['hud, score'],
    list
  });

  // The game/application player/user entity
  const player = list[0];

  /** @override **/
  this.render = function() {
    canvas.drawText({
      text: 'Score',
      x: this.x,
      y: this.y,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawText({
      text: `${player.points.score}`,
      x: this.x + canvas.pixel * 13,
      y: this.y + canvas.pixel * 10,
      size: 25,
      fillStyle: '#ffffff'
    });
  };
}

ScoreHud.prototype = Object.create(Entity.prototype);

module.exports = ScoreHud;
