const { fps } = require('../../../../options');
const update = require('./handler/update/update-handler');
const render = require('./handler/render/render-handler');
const e = require('../../../../exception/exception-handler');

function Entity(args) {
  // Position coordinates relative to the html5 canvas
  // x - position on the x axis in terms of canvas pixel units
  // y - position on the y axis in terms of canvas pixel units
  this.x = args.x
    ? typeof args.x === 'number'
      ? args.x
      : new e.entity.InvalidXException(args)
    : 0;
  this.y = args.y
    ? typeof args.y === 'number'
      ? args.y
      : new e.entity.InvalidXException(args)
    : 0;

  // Size dimensions relative to the html5 canvas
  // width - width in terms of canvas pixel units
  // height - height in terms of canvas pixel units
  this.width =
    args.width && typeof args.width === 'number'
      ? args.width
      : new e.entity.state.InvalidWidthException(args);
  this.height =
    args.height && typeof args.height === 'number'
      ? args.height
      : new e.entity.state.InvalidHeightException(args);

  // Vector movement properties
  // speed - vector movement magnitude
  // dx - unit direction on the x axis
  // dy - unit direction on the y axis
  this.speed =
    typeof args.speed === 'number'
      ? args.speed
      : new e.entity.InvalidSpeedException(this, args.dx);
  this.dx =
    typeof args.dx === 'number'
      ? Math.abs(args.dx) === 1
        ? args.dx
        : new e.entity.InvalidDxException(args)
      : 0;
  this.dy =
    typeof args.dy === 'number'
      ? Math.abs(args.dy) === 1
        ? args.dy
        : new e.entity.InvalidDyException(args)
      : 0;

  // Status properties
  // The extending entity class are expected to implement additional status
  // properties if needed.
  // dispose - flag if the entity should be removed from the entities list
  // after an update
  // collides - flag if the entity collides with other entities
  this.dispose = args.dispose || false;
  this.collides = args.collides || false;

  // Canvas object reference
  this.canvas = args.canvas || new e.entity.InvalidCanvasException(args);

  // Image properties
  // imgSrc - the image source(s) used by the entity
  // img - the image objects(s) used by the entity to render
  // imgIdx - the current image to render in the image object list
  // imgAnimTimer - The animation loop timer used to animate the entity image
  // imgDeg - the rotation in degrees to render the image
  this.imgSrc =
    typeof args.imgSrc === 'string'
      ? [args.imgSrc]
      : Array.isArray(args.imgSrc)
      ? args.imgSrc
      : new e.entity.InvalidImageSourcePathException(args);
  this.img = Array(typeof this.imgSrc === 'string' ? 1 : this.imgSrc.length)
    .fill(new Image())
    .map((_img, _idx) => Object.assign(_img, { src: this.imgSrc[_idx] }));
  this.imgIdx = 0;
  this.imgAnimTimer = {
    delay:
      args.imgAnimTimer && args.imgAnimTimer.delay
        ? args.imgAnimTimer.delay
        : fps,
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
  this.name = args.name || null;
  this.uuid =
    args.uuid ||
    `${(this.name || Entity.name).toLowerCase()}-${Date.now().toString(36)}}`;

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
  this.setList =
    args.setList ||
    new e.entity.InvalidEntitiesSetListException({
      args
    });
  this.setListIdx =
    typeof args.setListIdx === 'number'
      ? args.setListIdx
      : new e.entity.InvalidEntitiesSetListIndexException(args);
  this.setListType =
    args.setListType || new e.entity.InvalidEntitySetListTypeException(args);
  this.setListTypes =
    args.setListTypes || new e.entity.InvalidEntitySetListTypesException(args);
  this.factory = args.factory || null;
}

// Remove the entity from an entities list
Entity.remove = function(index) {
  this.setList[this.setListIdx].splice(index, 1);
};

// Perform an update on a single application frame.
// If the disposing status is true, perform entity disposal.
// Preupdate and postupdate methods are expected to overridden if needed.
Entity.prototype.update = function(index) {
  this.preUpdate && this.preUpdate();
  update(this, index);
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
