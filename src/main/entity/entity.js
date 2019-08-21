const { fps } = require('../options');
const canvas = require('../canvas');
const move = require('./event/move/move');
const moveToPoint = require('./event/move/move-to-point');
const moveInPath = require('./event/move/move-in-path');
const collision = require('./event/collision/collision');

function Entity({
  pos = {},
  dims = {},
  vector = {},
  props = {},
  status = {},
  points = {},
  image = {},
  meta = {}
}) {
  // Position coordinates relative to the html5 canvas
  // x - position on the x axis in terms of canvas pixel units
  // y - position on the y axis in terms of canvas pixel units
  this.pos = {
    x: pos.x || 0,
    y: pos.y || 0
  };

  // Size dimensions relative to the html5 canvas
  // width - width in terms of canvas pixel units
  // height - height in terms of canvas pixel units
  this.dims = {
    width: dims.width || 0,
    height: dims.height || 0
  };

  // Vector movement properties
  // speed - vector movement magnitude
  // dx - unit direction on the x axis
  // dy - unit direction on the y axis
  this.vector = {
    speed: vector.speed || 1,
    dx: vector.dx || 0,
    dy: vector.dy || 0
  };

  // Description/identification properties
  // type - entity type(s) (optional)
  // faction - faction affiliation (optional)
  this.props = {
    type: props.type || [],
    faction: props.faction || ''
  };

  // Status properties
  // Common statuses are added as baseline, but need not apply across all
  // entities.
  // The extending entity class are expected to implement additional status
  // properties if needed.
  this.status = {
    dispose: status.dispose || false,
    alive: status.alive || false,
    collides: status.collides || false,
    collided: status.collided || false,
    invincible: status.invincible || false,
    damaged: status.damaged || false,
    moving: status.moving || false,
    pathing: status.pathing || false
  };

  // Point properties
  // Common points are added as baseline, but need not apply across all
  // entities.
  // The extending entity class are expected to implement additional point
  // properties if needed.
  this.points = {
    health: points.health || 0,
    maxHealth: points.maxHealth || 0,
    attack: points.attack || 0,
    maxAttack: points.maxAttack || 0,
    score: points.score || 0,
    value: points.value || 0
  };

  // Image properties
  // obj - entity image object(s) reference
  // src - entity image object source(s) reference
  // deg - the degrees in which to render the image object
  // alpha - the opacity alpha value in which to render the image object, from
  // range 0 to 1
  // sat - the saturation value in which to render the image object, in
  // percentage
  // hue - the hue value in which to render the image object, in percentage
  // luma - the brightness value in which to render the image object, in
  // percentage
  // con - the contrast value in which to render the image object, in
  // percentage
  // from 0 to 100. Saturation must be > 0, otherwise won't matter.
  // delay - the delay for the image animation loop timer
  // timer - image animation loop timer
  this.image = {
    src: image.src,
    obj: Array.isArray(image.src)
      ? [...Array(image.src.length)].map((_, index) => {
          const _image = new Image();
          _image.src = image.src[index];
          return _image;
        })
      : [new Image()].map(_image => {
          _image.src = image.src;
          return _image;
        }),
    deg: image.deg || 0,
    alpha: image.alpha || 1,
    sat: image.sat || null,
    hue: image.hue || null,
    luma: image.luma || null,
    con: image.con || null,
    delay: image.delay || fps,
    timer: {
      frame: 0,
      index: 0
    }
  };

  // Meta properties
  // Contains references to external game/application entities/objects
  // creator - creator entity reference (optional)
  // factory - entity factory reference
  // list - entity list reference
  this.meta = {
    creator: meta.creator || null,
    factory: meta.factory || null,
    list: meta.list || null
  };

  // Define and bind external methods

  // Perform movement
  this.move = move.bind(this);

  // Perform movement to a position coordinate point
  this.moveToPoint = moveToPoint.bind(this);

  // Perform movement in a path
  this.moveInPath = moveInPath.bind(this);

  // Perform collision assertion and collision action
  this.collision = collision.bind(this);

  // Define update methods

  // Pre-update entity
  // Perform an update before the update method implementation.
  // Extending entity classes are expected to override this method if needed.
  this.preUpdate = function() {};

  // Entity disposal update action
  // Removes the entity from the entities list.
  this.dispose = function(index) {
    this.meta.list.splice(index, 1);
  };

  // Update the entity timers
  // Extending entity classes are expected to override this method if needed.
  this.updateTimers = function() {};

  // Update position coordinate
  // Perform a position coordinate update via the move method.
  this.updatePosition = function() {
    this.move();
  };

  // Update collision assertion and collision action
  // Perform an entity collision assertion via the collision method, if the
  // entities list was passed and collides status is set to true.
  this.updateCollision = function(index) {
    if (this.meta.list && this.status.collides) {
      this.collision(index);
    }
  };

  // Reset status/points/properties after an update in preparation for
  // the next update.
  this.reset = function() {
    if (this.status.collided) {
      this.status.collided = false;
    }
  };

  // Post-update entity
  // Perform an update after the update method implementation.
  // Extending entity classes are expected to override this method if needed.
  this.postUpdate = function() {};

  // Update entity
  // Perform update work on a single application frame.
  // If the disposing status is true, perform entity disposal.
  this.update = function(index) {
    this.preUpdate();

    if (this.status.dispose) {
      this.dispose(index);
    } else {
      this.updateTimers();
      this.updatePosition();
      this.updateCollision(index);
    }

    this.postUpdate();
    this.reset();
  };

  // Define render methods

  // Pre-render entity
  // Perform a render update before the render method implementation.
  // Extending entity classes are expected to override this method if needed.
  this.preRender = function() {};

  // Update the animation loop timer and image index
  this.updateAnimationTimer = function() {
    // Increment or reset animation image index
    const timerRangeBegin =
      this.image.timer.index * (this.image.delay / this.image.obj.length);

    const timerRangeEnd =
      (this.image.timer.index + 1) * (this.image.delay / this.image.obj.length);

    if (
      this.image.timer.frame >= timerRangeBegin &&
      this.image.timer.frame < timerRangeEnd
    ) {
      this.image.timer.index = this.image.timer.index + 1;
    }

    if (this.image.timer.index >= this.image.obj.length) {
      this.image.timer.index = 0;
    }

    // Increment or reset animation loop timer
    if (this.image.timer.frame >= this.image.delay) {
      this.image.timer.frame = 0;
    } else {
      this.image.timer.frame = this.image.timer.frame + 1;
    }
  };

  // Post-render entity
  // Perform a render update after the render method implementation.
  // Extending entity classes are expected to override this method if needed.
  this.postRender = function() {};

  // Render entity
  // Perform rendering on a single application frame.
  this.render = function() {
    this.preRender();

    canvas.drawImage({
      obj: this.image.obj[this.image.timer.index],
      x: this.pos.x,
      y: this.pos.y,
      width: this.dims.width,
      height: this.dims.height,
      deg: this.image.deg,
      alpha: this.image.alpha,
      sat: this.image.sat,
      hue: this.image.hue,
      luma: this.image.luma,
      con: this.image.con
    });

    this.updateAnimationTimer();
    this.postRender();
  };
}

module.exports = Entity;
