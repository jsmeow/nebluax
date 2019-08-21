const canvas = document.getElementById('canvas');

// Get the 2d canvas context
const context = canvas.getContext('2d');

// Get the width, height to the document body element
const width = Number(
  window
    .getComputedStyle(document.body)
    .getPropertyValue('width')
    .split('px')[0]
);
const height = Number(
  window
    .getComputedStyle(document.body)
    .getPropertyValue('height')
    .split('px')[0]
);

// Set the canvas element application pixel size
const pixel = width / 320;

// Set the canvas element width, height to the body element width, height
canvas.width = width;
canvas.height = height;

// Instantiate an offscreen canvas to optimize image rendering
const offscreenCanvas = new OffscreenCanvas(width, height);

/* const offscreenCanvas = document.createElement('canvas');
offscreenCanvas.width = width;
offscreenCanvas.height = height;*/

// Get the 2d offscreen canvas context
const offscreenContext = offscreenCanvas.getContext('2d');

// Draw canvas element text
function drawText({ text, x, y, size, fillStyle = '#ffffff' }) {
  /* context.fillStyle = fillStyle;
  context.font = `${size}px "Press Start 2P"`;
  context.fillText(text, x, y);*/
}

// Draw a canvas element image or specify degrees to draw rotated image
function drawImage({
  obj,
  x,
  y,
  width,
  height,
  deg,
  alpha,
  sat,
  hue,
  luma,
  con
}) {
  offscreenContext.filter = 'none';

  if (alpha && typeof alpha === 'number') {
    offscreenContext.globalAlpha = alpha;
  }

  if (sat && typeof sat === 'number') {
    offscreenContext.filter = `saturate(${sat})`;
  }

  if (hue && typeof hue === 'number') {
    offscreenContext.filter = `hue-rotate(${hue})`;
  }

  if (luma && typeof luma === 'number') {
    offscreenContext.filter = `brightness(${luma})`;
  }

  if (con && typeof con === 'number') {
    offscreenContext.filter = `contrast(${con})`;
  }

  if (deg && typeof deg === 'number') {
    offscreenContext.save();
    offscreenContext.translate(x + width / 2, y + height / 2);
    offscreenContext.rotate((deg * Math.PI) / 180.0);
    offscreenContext.translate(-x - width / 2, -y - height / 2);
    offscreenContext.drawImage(obj, x, y, width, height);
    offscreenContext.restore();
  } else {
    offscreenContext.drawImage(obj, x, y, width, height);
  }

  const data = offscreenContext.getImageData(x, y, width, height);
  context.putImageData(data, x, y);
}

/*  context.filter = 'none';

  if (alpha && typeof alpha === 'number') {
    context.globalAlpha = alpha;
  }

  if (sat && typeof sat === 'number') {
    context.filter = `saturate(${sat})`;
  }

  if (hue && typeof hue === 'number') {
    context.filter = `hue-rotate(${hue})`;
  }

  if (luma && typeof luma === 'number') {
    context.filter = `brightness(${luma})`;
  }

  if (con && typeof con === 'number') {
    context.filter = `contrast(${con})`;
  }

  if (deg && typeof deg === 'number') {
    context.save();
    context.translate(x + width / 2, y + height / 2);
    context.rotate((deg * Math.PI) / 180.0);
    context.translate(-x - width / 2, -y - height / 2);
    context.drawImage(obj, x, y, width, height);
    context.restore();
  } else {
    context.drawImage(obj, x, y, width, height);
  }*/

module.exports = {
  context,
  width,
  height,
  pixel,
  drawText,
  drawImage
};
