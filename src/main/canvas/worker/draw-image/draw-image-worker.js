function DrawImageWorker(canvas) {
  // Define the offscreen canvas context
  const context = canvas.getContext('2d');

  // Define the web worker
  const worker = new Worker('./main/canvas/worker/draw-image/worker.js');

  // Define the web worker onmessage event
  worker.onmessage = function(message) {
    const { data, x, y } = message.data;

    context.putImageData(data, x, y);
  };

  // Begin web worker execution
  this.exec = function({ elem, x, y, width, height }) {
    // Draw the image reference in the offscreen canvas
    context.drawImage(elem, x, y, width, height);

    // Get the image data
    // const imgd = context.getImageData(x, y, width, height);

    // worker.postMessage({ data, x, y });
  };

  // Terminate the web worker
  this.terminate = function() {
    worker.terminate();
  };
}

module.exports = DrawImageWorker;
