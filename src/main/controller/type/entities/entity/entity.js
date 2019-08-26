const { fps } = require('../../../../options');
const update = require('./event-handler/update/handle-on-update');
const render = require('./event-handler/render/handle-on-render');
const validate = require('./util/validate-args');
const generate = require('./util/generate-property');
const log = require('../../../../util/log');
const { newBtn } = require('../../../../util/emoji');

function Entity(args) {
  validate(args);

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
  // The extending entity class are expected to implement additional status
  // properties if needed.
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
  this.img = generate.img(this.imgSrc);
  this.imgIdx = 0;
  this.imgAnimTimer = {
    delay: (!args.imgAnimTimer && fps) || args.imgAnimTimer.delay,
    frame: 0
  };
  this.imgDeg = 0;

  // Entity timers
  // The animation loop timer is included by default, but extending entities
  // can add more timers if needed.
  this.timers = { imgAnimTimer: this.imgAnimTimer };

  // Description properties
  // uuid- unique universal identifier or custom defined id
  // type - the type of list the entity belongs to
  this.name = args.name || Entity.name;
  this.uuid = generate.uuid(this.name);

  // Meta properties
  // Contains references to eternal application entities/objects
  // creator - creator entity reference (optional)
  // children - children entity reference (optional)
  // setListType - entities set list type which the entity belongs to
  // setListType - entities set list types
  // type - entities list type which the entity belongs to
  // setList - entities list set reference
  // setListIdx - entities list set index reference
  // factory - the entity factory reference
  this.creator = args.creator || null;
  this.children = args.children || [];
  this.setList = args.setList;
  this.setListIdx = args.setListIdx;
  this.factory = args.factory || null;

  log.spawn(`${newBtn} spawned a ${this.name} with id ${this.uuid}`);
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
