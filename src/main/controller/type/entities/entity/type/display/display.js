const Entity = require('../../entity');

function Display({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  img,
  timers,
  meta
}) {
  Entity.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['disp', ...props.type]
    },
    status,
    points,
    img,
    timers,
    meta
  });
}

Display.prototype = Object.create(Entity.prototype);

module.exports = Display;
