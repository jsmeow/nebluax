const canvas = require('../../../canvas');

function update() {}

function render() {
  // Draw the 'NEBULON' text.
  // Draw the 'Press Enter To Play' text.
  canvas.drawText({
    text: 'NEBULON',
    x: canvas.width / 6,
    y: canvas.height / 2.5,
    size: 150,
    fillStyle: '#f44336'
  });
  canvas.drawText({
    text: 'Press Enter To Play',
    x: canvas.width / 5.2,
    y: canvas.height / 1.5,
    size: 50,
    fillStyle: '#ffffff'
  });
}

module.exports = {
  update,
  render
};
