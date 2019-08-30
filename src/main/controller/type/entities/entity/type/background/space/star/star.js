const canvas = require('../../../../../../canvas/canvas-controller');
const Entity = require('../../../../entity');
const util = require('../../../../util/entity-util');
const emojis = require('emoji.json/emoji-compact.json');

function Star(args) {
  Entity.call(
    this,
    Object.assign(args, {
      x: args.x || util.pos.x.rand(),
      y: args.y || util.pos.y.rand(),
      dy: args.dy || 1,
      emoji: Star.EMOJI
    })
  );

  /** @override **/
  this.preUpdate = function() {
    util.valid.collision.boundary.bttm(this.y, 0) &&
      Object.assign(this, {
        x: util.pos.x.rand(),
        y: util.pos.y.rand([-canvas.height, 0])
      });
  };
}

Star.prototype = Object.create(Entity.prototype);

Star.PATH = `${Entity.PATH}/type/background/space/star`;
Star.EMOJI = emojis[2851];

module.exports = Star;
