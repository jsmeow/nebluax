// Update the animation loop timer and image idx
function updateAnimationIndex(entity) {
  const timerRangeBegin =
    entity.img.idx * (entity.timers.anim.delay / entity.img.src.length);
  const timerRangeEnd =
    (entity.img.idx + 1) * (entity.timers.anim.delay / entity.img.src.length);

  // Increment or reset animation image idx
  if (
    entity.timers.anim.frame >= timerRangeBegin &&
    entity.timers.anim.frame < timerRangeEnd
  ) {
    entity.img.idx = entity.img.idx + 1;
  }

  if (entity.img.idx >= entity.img.src.length) {
    entity.img.idx = 0;
  }
}

module.exports = updateAnimationIndex;
