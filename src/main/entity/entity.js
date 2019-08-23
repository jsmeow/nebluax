const { fps } = require('../options');
const UpdateEventHandler = require('./event-handler/update/update-event-hander');
const RenderEventHandler = require('./event-handler/render/render-event-hander');

function Entity({
  pos = {},
  dims = {},
  vector = {},
  props = {},
  status = {},
  points = {},
  img = {},
  timers = {},
  meta = {}
}) {
  // Create entity event handlers
  const updateEventHandler = new UpdateEventHandler(this);
  const renderEventHandler = new RenderEventHandler(this);

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
  // The extending entity class are expected to implement additional
  // description properties if needed.
  // type - entity type(s) (optional)
  this.props = {
    type: props.type || [],
    ...props
  };

  // Status properties
  // The extending entity class are expected to implement additional status
  // properties if needed.
  // dispose - flag if the entity should be removed from the entities list on
  // the next update frame
  this.status = {
    dispose: status.dispose || false,
    ...status
  };

  // Image properties
  // src - the image source(s) used by the entity, converted to image objects
  // idx - the current image to render in the image object list
  // deg - the rotation in degrees to render the image
  this.img = {
    src: (Array.isArray(img.src) ? img.src : [img.src]).map(src => {
      const _img = new Image();
      _img.src = src;
      return _img;
    }),
    idx: 0,
    deg: img.deg || 0
  };

  // Entity timers
  // The animation timer is defined by default, but extending entities can add
  // more timers to this object, if needed.
  this.timers = {
    anim: {
      delay: timers && timers.anim ? timers.anim.delay : fps,
      frame: 0
    }
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

  // Update entity
  // Perform update work on a single application frame.
  // If the disposing status is true, perform entity disposal.
  this.update = function(index) {
    // Pre-update entity
    // Perform an update before the update method implementation.
    // Extending entity classes are expected to override this method if needed.
    this.preUpdate ? this.preUpdate() : null;

    updateEventHandler.updatePosition();
    updateEventHandler.updateCollision(index);
    updateEventHandler.updateTimers();
    updateEventHandler.updateAnimationIndex();
    updateEventHandler.updateDispose();

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

    renderEventHandler.renderImage();

    // Post-render entity
    // Perform a render update after the render method implementation.
    // Extending entity classes are expected to override this method if needed.
    this.postRender ? this.postRender() : null;
  };
}

module.exports = Entity;
