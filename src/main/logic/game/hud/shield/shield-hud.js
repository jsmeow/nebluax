const canvas = require('../../../../canvas');
const { grey } = require('../../../../../static/mui/muiColors');
const basic = './main/logic/game/hud/shield/assets/images/neutral.png';

// Set the image source.
const image = new Image();
image.src = basic;

function render(player) {
  canvas.drawText({
    text: 'Shield',
    x: canvas.width * 0.5 - 298,
    y: 50,
    size: 25,
    fillStyle: grey[50].main
  });
  for (let index = 0; index < player.points.shield; index += 1) {
    canvas.drawImage({
      image,
      x: canvas.width * 0.5 - 196 - 45 * index,
      y: 70,
      width: canvas.pixel * 7,
      height: canvas.pixel * 7
    });
  }
}

module.exports.render = render;
