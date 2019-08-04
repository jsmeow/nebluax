const { fps } = require('../../../options');
const entities = require('../../entities');
const properties = require('../../properties/properties-entity');
const initialize = require('./event/event-initialize');
const loadImage = require('./event/event-load-image');
const validation = require('./validation/validation');
const vector = require('./movement/movement-vector');
const roam = require('./movement/movement-roam');
const prowl = require('./movement/movement-prowl');
const patrol = require('./movement/movement-patrol');
const bombs = require('./event/event-bombs');
const bullets = require('./event/event-bullets');
const mines = require('./event/event-mines');
const damage = require('./event/event-damage');
const shield = require('./event/event-shield');
const power = require('./event/event-power');
const explosions = require('./event/event-explosions');
const collision = require('./event/event-collision');
const update = require('./event/event-update');
const render = require('./event/event-render');
const dispose = require('./event/event-dispose');
const async = require('./util/util-async');
const random = require('./util/util-random');

function Entity({
  x,
  y,
  width,
  height,
  faction,
  speed,
  dx,
  dy,
  type,
  status,
  points,
  timers,
  imageSources,
  creator
} = {}) {
  // Position
  // Take creator x, y by default if creator entity exists.
  this.x = x ? x : creator ? creator.x : Entity.X;
  this.y = y ? y : creator ? creator.y : Entity.Y;

  // Size
  // Take creator width, height by default if creator entity exists.
  this.width = width ? width : creator ? creator.width : Entity.WIDTH;
  this.height = height ? height : creator ? creator.height : Entity.HEIGHT;

  // Affiliated entity faction.
  // Take creator faction by default if creator entity exists.
  this.faction = faction ? faction : creator ? creator.faction : Entity.FACTION;

  // Vector movement unit magnitude.
  // Extending entities may override unity value if needed.
  this.speed = speed || Entity.SPEED;

  // The vector movement magnitude and direction in the x, y plane.
  // While moving, dx and dy are a function of the entity speed.
  this.dx = dx || Entity.DX;
  this.dy = dy || Entity.DY;

  // Type(s) of entity.
  // An entity may have multiple types, so it they are stored in a list.
  // Optional, allows for additional validation.
  this.type = type || Entity.TYPE;

  // The statuses an entity can take.
  // Alive status is enabled by default.
  // Extending entities may implement more statuses.
  this.status = {
    alive: true,
    firing: false,
    invincible: false,
    damaged: false,
    exploding: false,
    powered: false,
    shield: false,
    moving: false,
    pathing: false,
    paused: false,
    roaming: false,
    prowling: false,
    patrolling: false,
    disposing: false,
    ...status
  };

  // The points an entity can have.
  // Health is set to 1 by default.
  // Extending entities may implement more points.
  this.points = {
    health: 1,
    attack: 0,
    value: 0,
    score: 0,
    shield: 0,
    bomb: 0,
    mine: 0,
    power: 0,
    life: 0,
    ...points
  };

  // Timers for different actions/events/statuses.
  // Extending entities may implement more timers.
  this.timers = {
    projectile: {
      bullets: {
        frame: 0,
        delay: fps
      }
    },
    status: {
      damaged: {
        active: false,
        frame: 0,
        delay: fps / 2
      },
      powered: {
        active: false,
        frame: 0,
        delay: fps
      },
      shielded: {
        active: false,
        frame: 0,
        delay: fps
      }
    },
    ...timers
  };

  // Image object used by the entity.
  this.image = new Image();

  // Image sources used by this entity.
  // To be provided by the extending class.
  this.imageSources = {
    basic: null,
    allied: null,
    enemy: null,
    damaged: null,
    shielded: null,
    powered: null,
    explosions: [],
    ...imageSources
  };

  // A reference to the player entity, which is always the first in the entity
  // List (unless the entity instance is the player entity.)
  this.player = entities[0];

  // A reference to the creator of the entity, if it was created by another
  // Entity.
  this.creator = creator || null;

  // Load an image source into the image object.
  this.loadImage = loadImage.bind(this);

  // Initializer run at the end of the entity constructor.
  this.initialize = initialize.bind(this);

  // Returns a entity collision or collision event assertion.
  this.validateEntity = validation.validateEntity.bind(this);
  // Returns a boundary collision assertion.
  this.validateBoundary = validation.validateBoundary.bind(this);
  // Returns a point collision assertion.
  this.validatePoint = validation.validatePoint.bind(this);

  // Perform movement in a vector direction with magnitude dx, dy.
  this.vectorMove = vector.vectorMove.bind(this);
  // Perform movement in a vector line towards a point.
  this.vectorPoint = vector.vectorPoint.bind(this);
  // Perform movement in the x and y plane in a point path.
  this.vectorPath = vector.vectorPath.bind(this);

  // Perform roaming movement in place from left to right.
  this.roam = roam.roam.bind(this);
  // Start roaming movement.
  this.roamStart = roam.roamStart.bind(this);

  // Perform prowling movement/action.
  this.prowl = prowl.prowl.bind(this);
  // Start prowling movement/action.
  this.prowlStart = prowl.prowlStart.bind(this);

  // Start patrolling movement/action.
  this.patrol = patrol.bind(this);

  // Create a projectile(s) entity.
  this.bombsCreate = bombs.bombsCreate.bind(this);
  // Run the projectile timer for a set number of frames.
  this.bombsFrame = bombs.bombsFrame.bind(this);

  // Create a projectile(s) entity.
  this.bulletsCreate = bullets.bulletsCreate.bind(this);
  // Run the projectile timer for a set number of frames.
  this.bulletsFrame = bullets.bulletsFrame.bind(this);

  // Create a projectile(s) entity.
  this.minesCreate = mines.minesCreate.bind(this);
  // Run the projectile timer for a set number of frames.
  this.minesFrame = mines.minesFrame.bind(this);

  // Perform event action.
  this.damage = damage.damage.bind(this);
  // Enable event action.
  this.damageEnable = damage.damageEnable.bind(this);
  // Disable event action.
  this.damageDisable = damage.damageDisable.bind(this);
  // Run the event timer for a set number of frames.
  this.damageFrame = damage.damageFrame.bind(this);
  // Activate the event timer and enable event action.
  this.damageStart = damage.damageStart.bind(this);

  // Perform event action.
  this.shield = shield.shield.bind(this);
  // Enable event action.
  this.shieldEnable = shield.shieldEnable.bind(this);
  // Disable event action.
  this.shieldDisable = shield.shieldDisable.bind(this);
  // Run the event timer for a set number of frames.
  this.shieldFrame = shield.shieldFrame.bind(this);
  // Activate the event timer and enable event action.
  this.shieldStart = shield.shieldStart.bind(this);

  // Perform event action.
  this.power = power.power.bind(this);
  // Enable event action.
  this.powerEnable = power.powerEnable.bind(this);
  // Disable event action.
  this.powerDisable = power.powerDisable.bind(this);
  // Run the event timer for a set number of frames.
  this.powerFrame = power.powerFrame.bind(this);
  // Activate the event timer and enable event action.
  this.powerStart = power.powerStart.bind(this);

  // Create an effect entity around the entity after a delay.
  this.explosionsCreate = explosions.explosionsCreate.bind(this);
  // Create an effect entity around the entity.
  this.explosionsStart = explosions.explosionsStart.bind(this);

  // Perform event action.
  this.collision = collision.collision.bind(this);
  // Perform post event action.
  this.collisionPost = collision.collisionPost.bind(this);
  // Validate and perform event action.
  this.collisionStart = collision.collisionStart.bind(this);

  // Perform pre-event action.
  this.updatePre = update.updatePre.bind(this);
  // Perform timers event action.
  this.updateTimers = update.updateTimers.bind(this);
  // Perform post-event action.
  this.updatePost = update.updatePost.bind(this);
  // Perform update event action.
  this.update = update.update.bind(this);

  // Perform render event action.
  this.render = render.bind(this);

  // Perform event action.
  this.dispose = dispose.dispose.bind(this);
  // Enable event action.
  this.disposeStart = dispose.disposeStart.bind(this);

  // Creates a pause/delay timer.
  this.pause = async.pause.bind(this);

  // Returns a random number sign.
  this.randomSign = random.randomSign.bind(this);
  // Returns a random integer between min (inclusive) and max (inclusive).
  this.randomInteger = random.randomInteger.bind(this);
}

// Default size
Entity.WIDTH = properties.sizes.SHIP.SMALL.WIDTH;
Entity.HEIGHT = properties.sizes.SHIP.SMALL.HEIGHT;

// Default position
Entity.X = properties.positions.canvas.center.x({ width: Entity.WIDTH });
Entity.Y = properties.positions.canvas.center.y({ height: Entity.HEIGHT });

// Default faction
Entity.FACTION = properties.factions.NONE;

// Default speed
Entity.SPEED = 1;

// Default vector magnitude and direction
Entity.DX = 0;
Entity.DY = 0;

// Default type and subtype
Entity.TYPE = [properties.types.NONE.ID];

module.exports = Entity;
