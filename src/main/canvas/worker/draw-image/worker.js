function updateAnimationTimer(data) {
  const { elemLength, animDelay, animTimer } = data;

  const timerRangeBegin = animTimer.index * (animDelay / elemLength);
  const timerRangeEnd = (animTimer.index + 1) * (animDelay / elemLength);

  // Increment or reset animation image index
  if (animTimer.frame >= timerRangeBegin && animTimer.frame < timerRangeEnd) {
    animTimer.index = animTimer.index + 1;
  }

  if (animTimer.index >= elemLength) {
    animTimer.index = 0;
  }

  // Increment or reset animation loop timer
  if (animTimer.frame >= animDelay) {
    animTimer.frame = 0;
  } else {
    animTimer.frame = animTimer.frame + 1;
  }

  self.postMessage({ topic: 'updateAnimationTimer', animTimer });
}

self.onmessage = function(message) {
  switch (message.data.topic) {
    case 'updateAnimationTimer':
      updateAnimationTimer(message.data);
  }
};
