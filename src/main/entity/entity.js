const { fps } = require('../options');
const canvas = require('../canvas');
const UpdateWorkerHandler = require('./worker-handler/update/update-worker-handler');
const RenderWorkerHandler = require('./worker-handler/render/render-worker-handler');

function Entity({
  pos = {},
  dims = {},
  vector = {},
  props = {},
  status = {},
  points = {},
  img = {},
  anim = {},
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
  // ctx - offscreen canvas context reference
  // src - the image source(s) used by the entity, converted to image objects
  // deg - the rotation in degrees to render the image
  this.img = {
    ctx: canvas.offscreenCanvas.getContext('2d'),
    src: [Array.isArray(img.src) ? [...img.src] : [img.src]].map(
      (src, index) => {
        const _img = new Image();
        _img.src = src[index];
        return _img;
      }
    ),
    deg: img.deg || 0
  };

  // Animation properties if the entity performs animation ie. has more than
  // image source
  // delay - time between animation frames
  // frame - current animation frame
  // index - current animation image index of the current image to draw
  this.anim = {
    delay: anim.delay || fps,
    frame: 0,
    index: 0
  };

  // Meta properties
  // Contains references to external application entities/objects
  // creator - creator entity reference (optional)
  // factory - entity factory reference
  // entities - entity entities reference
  this.meta = {
    creator: meta.creator || null,
    factory: meta.factory || null,
    entities: meta.entities || null
  };

  // Create entity web worker handlers
  const updateWorkerHandler = new UpdateWorkerHandler(this);
  const renderWorkerHandler = new RenderWorkerHandler();

  // Update entity
  // Perform update work on a single application frame.
  // If the disposing status is true, perform entity disposal.
  this.update = function(index) {
    // Pre-update entity
    // Perform an update before the update method implementation.
    // Extending entity classes are expected to override this method if needed.
    this.preUpdate ? this.preUpdate() : null;

    if (this.status.dispose) {
      this.meta.entities.splice(index, 1);
    } else {
      // Update the entity timers
      // Extending entity classes are expected to override this method if
      // needed.
      this.updateTimers ? this.updateTimers() : null;

      updateWorkerHandler.updatePosition();
      updateWorkerHandler.updateCollision(index);
      updateWorkerHandler.updateAnimation();
    }

    // Post-update entity
    // Perform an update after the update method implementation.
    // Extending entity classes are expected to override this method if needed.
    this.postUpdate ? this.postUpdate() : null;
  };

  // Render entity
  // Perform rendering on a single application frame.
  this.render = function() {
    // Pre-render entity
    // Perform a render update before the render method implementation.
    // Extending entity classes are expected to override this method if needed.
    this.preRender ? this.preRender() : null;

    this.img.ctx.drawImage(
      this.img.src[this.anim.index],
      this.pos.x,
      this.pos.y,
      this.dims.width,
      this.dims.height
    );

    // Post-render entity
    // Perform a render update after the render method implementation.
    // Extending entity classes are expected to override this method if needed.
    this.postRender ? this.postRender() : null;
  };
}

module.exports = Entity;
