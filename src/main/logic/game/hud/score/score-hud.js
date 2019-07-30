const canvas = require('../../../../canvas');
const { grey } = require('../../../../../static/mui/muiColors');

function render(player) {
  canvas.drawText({
    text: 'Score',
    x: canvas.width * 0.5 + 348,
    y: 50,
    size: 25,
    fillStyle: grey[50].main
  });
  canvas.drawText({
    text: player.points.score,
    x: canvas.width * 0.5 + 395,
    y: 100,
    size: 25,
    fillStyle: grey[50].main
  });
}

module.exports.render = render;
