const { fps } = require('../../../../options');
const update = require('./event-handler/update/handle-on-update');
const render = require('./event-handler/render/handle-on-render');
const util = require('./util/entity-util');
const log = require('../../../../log/log');
const emojis = require('emoji.json/emoji-compact.json');

function Entity(args) {
  util.validateArgs(args);

  // Position coordinates relative to the html5 canvas
  // x - position on the x axis in terms of canvas pixel units
  // y - position on the y axis in terms of canvas pixel units
  this.x = args.x || 0;
  this.y = args.y || 0;

  // Size dimensions relative to the html5 canvas
  // width - width in terms of canvas pixel units
  // height - height in terms of canvas pixel units
  this.width = args.width;
  this.height = args.height;

  // Vector movement properties
  // speed - vector movement magnitude
  // dx - unit direction on the x axis
  // dy - unit direction on the y axis
  this.speed = args.speed || 1;
  this.dx = args.dx || 0;
  this.dy = args.dy || 0;

  // Status properties
  // Extending entities can add more status properties if needed.
  // dispose - flag if the entity should be removed from the entities list
  // after an update
  // collides - flag if the entity collides with other entities
  // collided - flag if the entity has collided with other entities
  this.dispose = args.dispose || false;
  this.collides = args.collides || false;
  this.collided = args.collided || false;

  // Image properties
  // imgSrc - the image source(s) used by the entity
  // img - the image objects(s) used by the entity to render
  // imgIdx - the current image to render in the image object list
  // imgAnimTimer - The animation loop timer used to animate the entity image
  // imgDeg - the rotation in degrees to render the image
  this.imgSrc = Array.isArray(args.imgSrc) ? args.imgSrc : [args.imgSrc];
  this.img = util.generateImg(this.imgSrc);
  this.imgIdx = 0;
  this.imgAnimTimer = {
    delay: (!args.imgAnimTimer && fps) || args.imgAnimTimer.delay,
    frame: 0
  };
  this.imgDeg = 0;

  // Entity timers
  // The animation loop timer is included by default, but extending entities
  // can add more timers if needed. (optional)
  this.timers = { imgAnimTimer: this.imgAnimTimer };

  // Description properties
  // Extending entities can add more description properties if needed.
  // name - name of the constructor class (optional)
  this.name = args.name || 'unknown';
  this.emoji = args.emoji || emojis[103];

  // Meta properties
  // Contains references to eternal application entities/objects
  // constr - the constructor class (optional)
  // uuid- unique universal identifier or custom defined id (optional)
  // creator - creator entity reference (optional)
  // children - children entity reference (optional)
  // factory - the entity factory reference (optional)
  // setList - entities list set reference
  // setListIdx - entities list set index reference
  this.constr = args.constr || 'entity constructor unknown';
  this.path = args.path || 'entity path unknown';
  this.uuid = args.uuid || util.generateUuid(this.name);
  this.creator = args.creator || null;
  this.children = args.children || [];
  this.factory = args.factory || null;
  this.setList = args.setList;
  this.setListIdx = args.setListIdx;

  log.entity.spwn(this);
}

// Remove the entity from an entities list
Entity.remove = function(index) {
  this.setList[this.setListIdx].splice(index, 1);
};

// Perform an update on a single application frame.
// If the disposing status is true, perform entity disposal.
// Preupdate and postupdate methods are expected to overridden if needed.
Entity.prototype.update = function(idx) {
  this.preUpdate && this.preUpdate();
  update(this, idx);
  this.postUpdate && this.postUpdate();
  this.dispose && this.remove();
};

// Perform rendering on a single application frame.
// Prerender and postrender methods are expected to overridden if needed.
Entity.prototype.render = function() {
  this.preRender && this.preRender();
  render(this);
  this.postRender && this.postRender();
};

module.exports = Entity;
