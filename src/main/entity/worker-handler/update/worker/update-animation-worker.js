// Update the animation loop timer and image index
self.onmessage = function(message) {
  const { imgLength, anim } = message.data;

  const timerRangeBegin = anim.index * (anim.delay / imgLength);
  const timerRangeEnd = (anim.index + 1) * (anim.delay / imgLength);

  // Increment or reset animation image index
  if (anim.frame >= timerRangeBegin && anim.frame < timerRangeEnd) {
    anim.index = anim.index + 1;
  }

  if (anim.index >= imgLength) {
    anim.index = 0;
  }

  // Increment or reset animation loop timer
  if (anim.frame >= anim.delay) {
    anim.frame = 0;
  } else {
    anim.frame = anim.frame + 1;
  }

  self.postMessage({ anim });
};
