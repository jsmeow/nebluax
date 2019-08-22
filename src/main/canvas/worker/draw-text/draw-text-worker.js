function DrawTextWorker(context, ocontext) {
  /*  const worker = new Worker('./main/canvas/workers/draw-image-worker.js');

  // Define the onmessage event
  worker.onmessage = function(message) {
    const { imageData, x, y } = message.data;

    context.putImageData(imageData, x, y);
    // worker.terminate();
  };

  this.exec = function() {
    ocontext.drawImage(obj, x, y, width, height);

    // Get the image data
    const imageData = ocontext.getImageData(x, y, width, height);

    worker.postMessage({ imageData, x, y });
  };*/
}

module.exports = function(context, ocontext) {
  return new DrawTextWorker(context, ocontext);
};
