// Update the animation loop image index
function updateAnimationIndex(entity) {
  const step = entity.imgAnimTimer.delay / entity.img.length;
  const timerRangeBegin = entity.imgIdx * step;
  const timerRangeEnd = (entity.imgIdx + 1) * step;

  // Increment animation image loop index
  entity.imgAnimTimer.frame >= timerRangeBegin &&
    entity.imgAnimTimer.frame < timerRangeEnd &&
    Object.assign(entity, { imgIdx: entity.imgIdx + 1 });

  // Reset animation image loop index
  entity.imgIdx >= entity.img.length && Object.assign(entity, { imgIdx: 0 });
}

module.exports = updateAnimationIndex;
