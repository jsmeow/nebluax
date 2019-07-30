const canvas = require('../../../../canvas');
const { grey } = require('../../../../../static/mui/muiColors');
const bomb = './main/logic/game/hud/bomb/assets/images/bomb.png';

// Set the image source.
const image = new Image();
image.src = bomb;

function render(player) {
  canvas.drawText({
    text: 'Bombs',
    x: canvas.width * 0.5 + 148,
    y: 50,
    size: 25,
    fillStyle: grey[50].main
  });
  for (let idx = 0; idx < player.points.bomb; idx += 1) {
    canvas.drawImage({
      image,
      x: canvas.width * 0.5 + 238 - 45 * idx,
      y: 70,
      width: 30,
      height: 30
    });
  }
}

module.exports.render = render;
