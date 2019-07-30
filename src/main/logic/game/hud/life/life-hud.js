const canvas = require('../../../../canvas');
const { grey } = require('../../../../../static/mui/muiColors');
const life = './main/logic/game/hud/life/assets/images/life.png';

// Set the image source.
const image = new Image();
image.src = life;

function render(player) {
  canvas.drawText({
    text: 'Lives',
    x: canvas.width * 0.5 - 518,
    y: 50,
    size: 25,
    fillStyle: grey[50].main
  });
  for (let idx = 0; idx < player.points.life; idx += 1) {
    canvas.drawImage({
      image,
      x: canvas.width * 0.5 - 427 - 45 * idx,
      y: 70,
      width: 30,
      height: 30
    });
  }
}

module.exports.render = render;
