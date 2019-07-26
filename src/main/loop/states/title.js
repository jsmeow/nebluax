const canvas = require('../../canvas');
const { grey, red } = require('../../../static/muiColors');

// Update action.
function update() {}

// Render action.
function render() {
  // Draw the 'NEBULON' text.
  canvas.drawText({
    text: 'NEBULON',
    x: canvas.width / 6,
    y: canvas.height / 2.5,
    size: 150,
    fillStyle: red[500].main
  });
  // Draw the 'Press Enter To Play' text.
  canvas.drawText({
    text: 'Press Enter To Play',
    x: canvas.width / 5.2,
    y: canvas.height / 1.5,
    size: 50,
    fillStyle: grey[50].main
  });
}

module.exports.update = update;
module.exports.render = render;
