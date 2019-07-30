const canvas = require('../../canvas');
const Entity = require('../entity');

// An entity that can move.
function Moving({ x, y, width, height } = {}) {
  Entity.call(this, { x, y, width, height });

  // The statuses an entity can take.
  // Extending entities may implement more statuses.
  this.status = {
    moving: false,
    pathing: false,
    roaming: false,
    prowling: false,
    patrolling: false
  };

  // Vector movement magnitude.
  this.speed = 1;

  // The change in vector movement in x, y.
  this.dx = 0;
  this.dy = 0;

  // The coordinate to move the entity to.
  this.coordinate = {
    x: 0,
    y: 0
  };

  // The vector coordinates path to move the entity.
  this.coordinates = [];

  // Flag if moving in vector direction towards a point.
  this.status.moving = false;

  // The moving vector direction.
  this.direction = {
    left: false,
    right: false,
    up: false,
    down: false
  };

  // Flag is pathing.
  this.status.pathing = false;
}

Moving.prototype = Object.create(Entity.prototype);

// Collision detection.
Moving.prototype.collides = function() {
  return {
    // Boundary collision.
    boundary: {
      left: this.x - this.dx <= 0,
      right: this.x + this.dx >= canvas.width + this.width,
      top: this.y - this.dy <= 0,
      bottom: this.y + this.dy >= canvas.height - this.height
    },
    // Point collision.
    point: ({ x, y }) => {
      return {
        left: x <= this.x,
        right: x >= this.x,
        up: y <= this.y,
        down: y >= this.y
      };
    }
  };
};

// Move in a vector line towards a point.
Moving.prototype.point = function() {
  // Get movement vector directions.
  // Directions relative to the moving point.
  if (this.x > this.coordinate.x) {
    this.direction.left = true;
  }
  if (this.x < this.coordinate.x) {
    this.direction.right = true;
  }
  if (this.y > this.coordinate.y) {
    this.direction.up = true;
  }
  if (this.y < this.coordinate.y) {
    this.direction.down = true;
  }

  // Path action if not moving towards a point.
  if (!this.status.moving) {
    // Set moving to true.
    this.status.moving = true;

    // Set change in vector movement.
    if (this.direction.left) {
      this.dx = this.status.roaming ? -0.5 : -1;
    }
    if (this.direction.right) {
      this.dx = this.status.roaming ? 0.5 : 1;
    }
    if (this.direction.up) {
      this.dy = this.status.roaming ? -0.5 : -1;
    }
    if (this.direction.down) {
      this.dy = this.status.roaming ? 0.5 : 1;
    }
  }

  // Set change in vector movement to 0 if point has been reached.
  if (this.direction.left && this.x < this.coordinate.x) {
    this.dx = 0;
  }
  if (this.direction.right && this.x > this.coordinate.x) {
    this.dx = 0;
  }
  if (this.direction.up && this.y < this.coordinate.y) {
    this.dy = 0;
  }
  if (this.direction.down && this.y > this.coordinate.y) {
    this.dy = 0;
  }

  // Set moving and pathing to false when point has been reached in the
  // X and y plane.
  if (this.dx === 0 && this.dy === 0) {
    this.coordinate = {
      x: 0,
      y: 0
    };
    this.direction = {
      left: false,
      right: false,
      up: false,
      down: false
    };

    // Set moving to false.
    this.status.moving = false;
  }
};

// Move in a vector point path.
Moving.prototype.path = function() {
  if (!this.status.pathing) {
    // Set pathing to true.
    this.status.pathing = true;
  }

  // Action to take while not pathing and path has elements.
  // If done pathing, set roaming to false.
  // Set the moving point to be the first element of the path list.
  if (this.coordinates.length > 0 && !this.status.moving) {
    this.coordinate = this.coordinates.shift();
  }

  this.point();

  if (
    this.status.pathing &&
    !this.status.moving &&
    this.coordinates.length === 0
  ) {
    this.coordinates = [];
    // If no point in path, set roaming to false.
    // Reset pathing elements.
    this.status.pathing = false;
  }
};

// Roam in place.
Moving.prototype.roam = function() {
  // Roaming action if not roaming.
  if (!this.status.roaming) {
    console.log(this.status.prowling);
    // Set roaming status to true.
    this.status.roaming = true;

    // Set the roaming path.
    this.coordinates = [
      { x: this.x - 100, y: this.y },
      { x: this.x, y: this.y },
      { x: this.x + 100, y: this.y },
      { x: this.x, y: this.y }
    ];
  }

  this.path();

  if (this.status.roaming && !this.status.pathing) {
    // If no point in path, set roaming to false.
    // Reset pathing elements.
    this.status.roaming = false;
  }
};

// Do prowling.
// To be implemented by the extending class.
Moving.prototype.prowling = function(x, y) {};

Moving.prototype.prowl = function() {
  // Prowling action if not prowling.
  if (!this.status.prowling) {
    // Set prowling status to true.
    this.status.prowling = true;

    this.prowling(this.x, this.y);
  }

  this.path();

  if (this.status.prowling && !this.status.pathing) {
    // If no point in path, set roaming to false.
    // Reset prowling elements.
    this.status.prowling = false;
  }
};

// Move in a vector.
Moving.prototype.move = function(
  { dx = 0, dy = 0 } = { dx: this.dx, dy: this.dy }
) {
  // Perform movement in the x and y plane.
  this.x = this.x + this.speed * dx;
  this.y = this.y + this.speed * dy;

  if (this.status.roaming && !this.status.prowling && !this.status.pathing) {
    this.roam();
  }

  /*  If (this.status.prowling && !this.status.roaming && !this.status.pathing) {
    this.prowl();
  }

  if (this.status.patrolling) {
    if (this.status.roaming && !this.status.prowling) {
      this.roam();
    }
    if (this.status.prowling && !this.status.roaming) {
      this.prowl();
    }
  }*/
};

module.exports = Moving;
