const { window } = require('../../../options');
const canvas = require('../../canvas/canvas-controller');
const exception = require('../../../exception/exception');
const timers = require('../timers/entity-timers');
const update = require('../update/update-entity');
const utils = require('../../../utils/utils');
const log = require('../../../log/log');
const emojis = require('emoji.json/emoji-compact.json');

function Entity(args) {
  // Size dimensions relative to the html5 canvas
  // width - width in terms of canvas pixel units
  // height - height in terms of canvas pixel units
  exception.entity.args.size(args.width, args.height);
  this.width = args.width * window.scale;
  this.height = args.height * window.scale;

  // Position coordinates relative to the html5 canvas
  // xmax - the magnitude of the maximum value x can take within the canvas
  // ymax - the magnitude of the maximum value y can take within the canvas
  // x - position on the x axis in terms of canvas pixel units
  // y - position on the y axis in terms of canvas pixel units
  exception.entity.args.position(args.x, args.y);
  this.x = (args.x || 0) * window.scale - this.width * 0.5;
  this.y = (args.y || 0) * window.scale - this.height * 0.5;

  // The entity rotation (in degrees)
  this.rotation = args.rotation || 0;
  this.moveInRotation = args.moveInRotation || false;

  // Vector movement properties
  // speed - vector movement magnitude
  // dx - unit direction on the x axis
  // dy - unit direction on the y axis
  exception.entity.args.vector(args.speed, args.dx, args.dy);
  this.speed = args.speed || 1;
  this.dx = args.dx || 0;
  this.dy = args.dy || 0;

  // Entity timers
  // Extending entities can add more timers if needed. (optional)
  this.timers = {};

  // Image properties
  // imagePath - the image path(s) used by the entity
  // imageSource - the image objects(s) used by the entity
  // imageBasic - the standard entity image used by the entity
  // image - the current image object to render
  // imageDeg - the rotation in degrees to render the image
  exception.entity.args.imagePath(args.imagePath);
  this.imagePath = args.imagePath;
  this.imageSource = utils.entity.generate.imageSource(this.imagePath);
  this.imageBasic = Array.isArray(this.imageSource)
    ? this.imageSource[0]
    : this.imageSource;
  this.image = this.imageBasic;

  // Add the animation timer to the timer list if the entity has more than
  // one image source ie. animates
  // Can be overridden to provide different values for the timer.
  if (Array.isArray(this.imageSource)) {
    this.timers.animation = timers.base.animation();
  }

  // Description properties
  // Extending entities can add more description properties if needed.
  // name - name of the constructor class (optional)
  // emoji - emoji of the constructor class (optional)
  this.name = args.name || 'unknown';
  this.emoji = args.emoji || Entity.EMOJI;

  // Meta properties
  // Contains references to eternal application entities/objects
  // constr - the constructor class (optional)
  // path - the path of the entity file
  // uuid- unique universal identifier or custom defined id (optional)
  // parent - parent entity reference (optional)
  // children - list of entity children spawn by the entity (optional)
  // factory - the entity factory reference (optional)
  this.constr = args.constr || 'entity base class unknown';
  this.path = args.path || 'entity path unknown';
  this.uuid = args.uuid || utils.entity.generate.uuid(this.name);
  this.parent = args.parent || null;
  this.children = [];
  this.factory = args.factory || null;

  // The entities set list reference
  // setList - entities set list reference
  // setListIdx - entities set list index reference
  exception.entity.args.setList(args.setList, args.setListIdx);
  this.setList = args.setList;
  this.setListIdx = args.setListIdx;

  // Default entity action to take on an application frame update
  this.actions = [update.base.position, update.base.timers];

  // Dispose flags if the entity should be removed from the entities list after
  // an update
  this.dispose = args.dispose || false;

  // Flags if the entity event/actions should be sent to the console log
  this.log = typeof args.log === 'boolean' ? args.log : true;

  // Log entity spawn event
  log.entity.spawn(this);
}

// Spawn child entities by passing in the entity factory method and add them
// to the children list
Entity.prototype.spawnChildren = function(children) {
  if (Array.isArray(children) && children.length > 0) {
    this.children.push(...children);
    log.entity.spawnChildren(this);
  }
};

// Remove the entity from an entities list
Entity.prototype.remove = function(index) {
  this.setList[this.setListIdx].splice(index, 1);
};

// Thea actions to take before updating
// Extending classes are expected to override this method if needed.
Entity.prototype.preUpdate = function() {};

// Thea actions to take after updating
// Extending classes are expected to override this method if needed.
Entity.prototype.postUpdate = function() {};

// Perform an update on a single application frame.
// If the disposing status is true, perform entity disposal.
// Preupdate and postupdate methods are expected to overridden if needed.
// Iterate over and perform the entity actions.
Entity.prototype.update = function(index, dt) {
  this.preUpdate();
  update(this, index, dt);
  this.postUpdate();
  if (this.dispose) {
    this.remove(index);
  }
};

// Thea actions to take before rendering
// Extending classes are expected to override this method if needed.
Entity.prototype.preRender = function() {};

// Thea actions to take after rendering
// Extending classes are expected to override this method if needed.
Entity.prototype.postRender = function() {};

// Perform rendering on a single application frame.
// Prerender and postrender methods are expected to overridden if needed.
Entity.prototype.render = function() {
  this.preRender();
  canvas.drawImage(this);
  this.postRender();
};

Entity.PATH = './main/controller/entities/entity';
Entity.EMOJI = emojis[103];

module.exports = Entity;
