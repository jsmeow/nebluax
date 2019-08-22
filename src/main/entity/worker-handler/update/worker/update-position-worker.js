// Perform movement in a vector directions dx, dy with vector magnitude speed
self.onmessage = function(message) {
  const { pos, vector } = message.data;

  pos.x = pos.x + vector.dx * vector.speed;
  pos.y = pos.y + vector.dy * vector.speed;

  self.postMessage({ pos });
};
