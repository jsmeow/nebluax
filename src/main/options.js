function createOptions() {
  // Application frames per second
  const fps = 60;

  // Application window properties
  // The window pixel dimensions are hardcoded to 320x320 in order to get the
  // low resolution pixel art aesthetic look.
  const window = {
    width: 320,
    height: 320,
    scale: 4
  };

  return { fps, window };
}

module.exports = createOptions();
