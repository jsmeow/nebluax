const DrawImageWorker = require('./worker/draw-image/draw-image-worker');
const DrawTextWorker = require('./worker/draw-text/draw-text-worker');

// Define the canvas reference and canvas context
const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');

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

// Define the offscreen canvas to optimize image rendering
const ocanvas = canvas.transferControlToOffscreen();
ocanvas.width = canvas.width;
ocanvas.height = canvas.height;

// Instantiate the worker objects
const drawImageWorker = new DrawImageWorker(ocanvas);
const drawTextWorker = new DrawTextWorker(ocanvas);

// Draw a canvas image
function drawImage(args) {
  // context.drawImage(args.obj, args.x, args.y, args.width, args.height);

  drawImageWorker.exec({ ...args });

  // console.log(args.height);

  // Draw the image reference in the offscreen canvas
  // context.drawImage(args.obj, 0, 0, canvas.width, canvas.height);
  // context.drawImage(args.obj, args.x, args.y, args.width, args.height);
}

// Draw canvas text
function drawText(args) {
  /*  drawTextWorker.setImageData({ ...args });
  drawTextWorker.exec();*/
}

module.exports = {
  width: canvas.width,
  height: canvas.height,
  res,
  drawText,
  drawImage
};
