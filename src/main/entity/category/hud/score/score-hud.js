const canvas = require('../../../../canvas');
const Entity = require('../../../entity');

function ScoreHud(entities) {
  Entity.call(this, {
    x: canvas.width - canvas.res * 50,
    y: canvas.res * 10,
    type: ['hud, score'],
    entities
  });

  // The application player/user entity
  const player = entities[0];

  /** @override **/
  this.render = function() {
    canvas.drawText({
      text: 'Score',
      x: this.pos.x,
      y: this.pos.y,
      size: 25,
      fillStyle: '#ffffff'
    });

    canvas.drawText({
      text: `${player.points.score}`,
      x: this.pos.x + canvas.res * 13,
      y: this.pos.y + canvas.res * 10,
      size: 25,
      fillStyle: '#ffffff'
    });
  };
}

ScoreHud.prototype = Object.create(Entity.prototype);

module.exports = ScoreHud;
