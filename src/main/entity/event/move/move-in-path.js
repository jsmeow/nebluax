const moveToPoint = require('./move-to-point');

// Perform movement in the x and y plane in a vector line path.
// !Warning! This is an async action.
function moveInPath(path) {
  this.status.pathing = true;

  return path
    .reduce((promise, point) => {
      return promise.then(() => {
        return moveToPoint(point);
      });
    }, Promise.resolve())
    .then(() => {
      this.status.pathing = false;
      return Promise.resolve();
    });
}

module.exports = moveInPath;
