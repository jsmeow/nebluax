const { fps, window } = require('../../../../options');
const canvas = require('../../canvas/canvas-controller');
const update = require('./update/update-entity');
const util = require('./util/entity-util');
const log = require('../../../../log/log');
const emojis = require('emoji.json/emoji-compact.json');

function Entity(args) {
  // Position coordinates relative to the html5 canvas
  // x - position on the x axis in terms of canvas pixel units
  // y - position on the y axis in terms of canvas pixel units
  util.valid.args.pos(args);
  this.x = args.x || 0;
  this.y = args.y || 0;

  // Size dimensions relative to the html5 canvas
  // width - width in terms of canvas pixel units
  // height - height in terms of canvas pixel units
  util.valid.args.size(args);
  this.width = args.width * window.scale;
  this.height = args.height * window.scale;
  /* this.width = args.width * window.scale;
  this.height = args.height * window.scale;*/

  // Vector movement properties
  // speed - vector movement magnitude
  // dx - unit direction on the x axis
  // dy - unit direction on the y axis
  util.valid.args.vector(args);
  this.speed = args.speed || 1;
  this.dx = args.dx || 0;
  this.dy = args.dy || 0;

  // Image properties
  // imgSrc - the image source(s) used by the entity
  // img - the image objects(s) used by the entity to render
  // imgIdx - the current image to render in the image object list
  // imgTimer - The animation loop timer used to animate the entity image
  // imgDeg - the rotation in degrees to render the image
  util.valid.args.img(args);
  this.imgSrc = Array.isArray(args.imgSrc) ? args.imgSrc : [args.imgSrc];
  this.img = util.gen.img(this.imgSrc);
  this.imgIdx = 0;
  this.imgTimer = {
    delay: (!args.imgTimer && fps) || args.imgTimer.delay,
    frame: 0
  };
  this.imgDeg = 0;

  // Entity timers
  // The animation loop timer is included by default, but extending entities
  // can add more timers if needed. (optional)
  this.timers = { imgTimer: this.imgTimer };

  // Description properties
  // Extending entities can add more description properties if needed.
  // name - name of the constructor class (optional)
  this.name = args.name || 'unknown';
  this.emoji = args.emoji || Entity.EMOJI;

  // Meta properties
  // Contains references to eternal application entities/objects
  // constr - the constructor class (optional)
  // uuid- unique universal identifier or custom defined id (optional)
  // creator - creator entity reference (optional)
  // children - list of entity children spawn by the entity (optional)
  // factory - the entity factory reference (optional)
  this.constr = args.constr || 'entity base class unknown';
  this.path = args.path || 'entity path unknown';
  this.uuid = args.uuid || util.gen.uuid(this.name);
  this.creator = args.creator || null;
  this.children = [];
  this.factory = args.factory || null;

  // The entities set list reference
  // setList - entities set list reference
  // setListIdx - entities set list index reference
  util.valid.args.setList(args);
  this.setList = args.setList;
  this.setListIdx = args.setListIdx;

  // Dispose flags if the entity should be removed from the entities list after
  // an update
  this.dispose = args.dispose || false;

  // Log entity spawn event
  log.ctrlr.entities.entity.spawn(this);
}

// Spawn child entities by passing in the entity factory method and add them
// to the children list
Entity.prototype.spawnChildren = function(children) {
  this.children.push(...children);
  log.ctrlr.entities.entity.children(this);
};

// Remove the entity from an entities list
Entity.prototype.remove = function(idx) {
  this.setList[this.setListIdx].splice(idx, 1);
};

// Perform an update on a single application frame.
// If the disposing status is true, perform entity disposal.
// Preupdate and postupdate methods are expected to overridden if needed.
Entity.prototype.update = function(idx, dt) {
  /* if (this.name.includes('Asteroid')) {
    console.log(this.y);
  }*/

  this.preUpdate && this.preUpdate(idx);
  update(this, dt);
  this.postUpdate && this.postUpdate(idx);
  this.dispose && this.remove(idx);
};

// Perform rendering on a single application frame.
// Prerender and postrender methods are expected to overridden if needed.
Entity.prototype.render = function(dt) {
  this.preRender && this.preRender();
  canvas.drawImage(this);
  this.postRender && this.postRender();
};

Entity.PATH = './main/controller/type/entities/entity';
Entity.EMOJI = emojis[103];

module.exports = Entity;
