const { fps } = require('../../../options');
const { offscreenCanvas } = require('../../canvas');

function DrawImageWorker(pos, dims, img) {
  // Position coordinates relative to the html5 canvas
  this.pos = {
    x: pos.x,
    y: pos.y
  };

  // Size dimensions relative to the html5 canvas
  this.dims = {
    width: dims.width,
    height: dims.height
  };

  // The image source path
  this.src = img.src;

  // The image object list
  this.elem = Array.isArray(this.src)
    ? [...Array(this.src.length)].map((_, index) => {
        const _image = new Image();
        _image.src = this.src[index];
        return _image;
      })
    : [new Image()].map(_img => {
        _img.src = this.src;
        return _img;
      });

  // The animation loop  delay
  this.animDelay = img.animDelay || fps;

  // The animation loop timer
  this.animTimer = {
    frame: 0,
    index: 0
  };

  // The offscreen canvas context
  const ctx = offscreenCanvas.getContext('2d');

  // Create the web worker
  const worker = new Worker('./main/canvas/worker/draw-image/worker.js');

  // Define the web worker onmessage event
  worker.onmessage = function(message) {
    const { data, x, y } = message.data;

    context.putImageData(data, x, y);
  };

  // Define the web worker message event
  worker.addEventListener('message', message => {
    switch (message.data.topic) {
      case 'updateAnimationTimer':
        this.animTimer = { ...message.data.animTimer };
        break;
      default:
        console.log('no worker topic');
    }
  });

  // Begin web worker execution
  this.exec = function() {
    // console.log(y);

    // Draw the image reference in the offscreen canvas
    ctx.drawImage(
      this.elem[this.animTimer.index],
      this.pos.x,
      this.pos.y,
      this.dims.width,
      this.dims.height
    );
  };

  // Update the animation loop timer and image index
  this.updateAnimationTimer = function() {
    worker.postMessage({
      topic: 'updateAnimationTimer',
      elemLength: this.elem.length,
      animDelay: this.animDelay,
      animTimer: this.animTimer
    });
  };

  // Terminate the web worker
  this.terminate = function() {
    worker.terminate();
  };
}

module.exports = DrawImageWorker;
