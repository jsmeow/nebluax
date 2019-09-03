module.exports = function(name) {
  return `${name || 'unknown'}-${Math.random()
    .toString(36)
    .substr(2, 9)}`;
};
