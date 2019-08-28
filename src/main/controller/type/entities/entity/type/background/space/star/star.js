const canvas = require('../../../../../../canvas/canvas-controller');
const Entity = require('../../../../entity');
const util = require('../../../../util/entity-util');
const emojis = require('emoji.json/emoji-compact.json');

function Star(args) {
  Entity.call(
    this,
    Object.assign(args, {
      x: args.x || util.pos.x.rndm(),
      y: args.y || util.pos.y.rndm()
    })
  );

  /** @override **/
  this.preUpdate = function() {
    util.val.collsn.bndry.bttm(this.y, 0) &&
      Object.assign(this, {
        x: util.pos.x.rndm(),
        y: util.pos.y.rndm([-canvas.height, 0])
      });
  };
}

Star.prototype = Object.create(Entity.prototype);

Star.PATH = './main/controller/type/entities/entity/type/background/space/star';
Star.EMOJI = emojis[2851];

module.exports = Star;
