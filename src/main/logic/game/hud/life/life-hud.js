const canvas = require('../../../../canvas');
const { grey } = require('../../../../../static/mui/muiColors');
const basic = './main/logic/game/hud/life/assets/images/basic.png';

// Set the image source.
const image = new Image();
image.src = basic;

function render(player) {
  canvas.drawText({
    text: 'Lives',
    x: canvas.width * 0.5 - 518,
    y: 50,
    size: 25,
    fillStyle: grey[50].main
  });
  for (let index = 0; index < player.points.life; index += 1) {
    canvas.drawImage({
      image,
      x: canvas.width * 0.5 - 427 - 45 * index,
      y: 70,
      width: 30,
      height: 30
    });
  }
}

module.exports.render = render;
