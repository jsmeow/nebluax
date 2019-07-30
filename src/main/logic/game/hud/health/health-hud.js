const canvas = require('../../../../canvas');
const { grey } = require('../../../../../static/mui/muiColors');
const health = './main/logic/game/hud/health/assets/images/health.png';

// Set the image source.
const image = new Image();
image.src = health;

function render(player) {
  canvas.drawText({
    text: 'HP',
    x: canvas.width * 0.5 - 28,
    y: 50,
    size: 25,
    fillStyle: grey[50].main
  });
  for (let idx = 0; idx < player.points.health; idx += 1) {
    canvas.drawImage({
      image,
      x: canvas.width * 0.5 + 28 - 45 * idx,
      y: 70,
      width: 30,
      height: 30
    });
  }
}

module.exports.render = render;
