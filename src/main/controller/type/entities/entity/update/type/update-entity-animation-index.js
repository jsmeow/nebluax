// Update the animation loop image index
function updateEntityAnimationIndex(entity) {
  const step = entity.imgTimer.delay / entity.img.length;
  const timerRangeBegin = entity.imgIdx * step;
  const timerRangeEnd = (entity.imgIdx + 1) * step;

  // Increment animation image loop index
  entity.imgTimer.frame >= timerRangeBegin &&
    entity.imgTimer.frame < timerRangeEnd &&
    Object.assign(entity, { imgIdx: entity.imgIdx + 1 });

  // Reset animation image loop index
  entity.imgIdx >= entity.img.length && Object.assign(entity, { imgIdx: 0 });
}

module.exports = updateEntityAnimationIndex;
