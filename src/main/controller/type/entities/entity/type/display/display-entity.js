const Entity = require('../../entity');

function DisplayEntity({
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

DisplayEntity.prototype = Object.create(Entity.prototype);

module.exports = DisplayEntity;
