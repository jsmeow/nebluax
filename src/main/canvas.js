// Define the canvas reference and canvas context
const canvas = document.getElementById('canvas');

// Get the width, height of the document body element and set the canvas
//  dimensions to the body element dimensions
canvas.width = Number(
  window
    .getComputedStyle(document.body)
    .getPropertyValue('width')
    .split('px')[0]
);
canvas.height = Number(
  window
    .getComputedStyle(document.body)
    .getPropertyValue('height')
    .split('px')[0]
);

// Set the canvas element application resolution/pixel size
// Application resolution set to 320, in order to get the low resolution pixel
// art aesthetic look.
const res = canvas.width / 320;

// Define the offscreen canvas to optimize image rendering and the offscreen
// canvas context
const offscreenCanvas = canvas.transferControlToOffscreen();
const ctx = offscreenCanvas.getContext('2d');
offscreenCanvas.width = canvas.width;
offscreenCanvas.height = canvas.height;

module.exports = {
  width: canvas.width,
  height: canvas.height,
  res,
  ctx
};
