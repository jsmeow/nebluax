const canvas = require('../../../../canvas');
const { grey } = require('../../../../../static/mui/muiColors');
const shield = './main/logic/game/hud/shield/assets/images/default.png';

// Set the image source.
const image = new Image();
image.src = shield;

function render(player) {
  canvas.drawText({
    text: 'Shield',
    x: canvas.width * 0.5 - 298,
    y: 50,
    size: 25,
    fillStyle: grey[50].main
  });
  for (let idx = 0; idx < player.points.shield; idx += 1) {
    canvas.drawImage({
      image,
      x: canvas.width * 0.5 - 196 - 45 * idx,
      y: 70,
      width: 30,
      height: 30
    });
  }
}

module.exports.render = render;
