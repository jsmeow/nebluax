const { grey } = require('../static/mui/muiColors');

const canvas = document.getElementById('canvas');

// The 2D rendering canvas for the drawing surface of a <canvas> element.
// It is used for drawing shapes, text, images, and other objects.
const context = canvas.getContext('2d');

// Get the width, height to the document <body> element.
const width = window
  .getComputedStyle(document.body)
  .getPropertyValue('width')
  .split('px')[0];
const height =
  window
    .getComputedStyle(document.body)
    .getPropertyValue('height')
    .split('px')[0] - 25;

// Set the <canvas> element application pixel size.
const pixel = 6.667;

// Set the <canvas> element width, height to the <body> element width, height.
canvas.width = width;
canvas.height = height;

// Set the <canvas> element aspect ratio, for reference.
aspectRatio = {
  width: canvas.width / 4,
  height: canvas.height / 3
};

// Draw <canvas> element text.
function drawText({ text, x, y, size, fillStyle = grey[50].light }) {
  context.fillStyle = fillStyle;
  // Context.font = `${size} "Press Start 2P"`;
  context.font = `${size}px "Press Start 2P"`;
  context.fillText(text, x, y);
}

// Draw a <canvas> element image.
function drawImage({ image, x, y, width, height }) {
  context.drawImage(image, x, y, width, height);
}

// Draw a <canvas> element image rotated.
function drawImageRotated({ image, x, y, width, height, degrees }) {
  context.save();
  context.rotate(degrees);
  context.drawImage(image, -x, -y, -width, -height);
  context.restore();
}

// Draw a <canvas> element rectangle.
function drawRect({
  x,
  y,
  width,
  height,
  fillStyle = grey[50].light,
  lineWidth,
  strokeStyle
}) {
  context.fillStyle = fillStyle;
  context.fillRect(x, y, width, height);
  if (strokeStyle) {
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.strokeRect(x, y, width, height);
  }
}

// Draw a <canvas> element triangle.
function drawTriangle({ x1, y1, x2, y2, x3, y3, fillStyle = grey[50].light }) {
  context.fillStyle = fillStyle;
  context.fill();
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineTo(x3, y3);
  context.fill();
}

module.exports = {
  context,
  width,
  height,
  pixel,
  aspectRatio,
  drawText,
  drawImage,
  drawImageRotated,
  drawRect,
  drawTriangle
};
