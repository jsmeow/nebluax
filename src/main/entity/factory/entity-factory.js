const BackgroundFactory = require('./background/background-factory');
const BulletFactory = require('./bullet/bullet-factory');
const ExplosionFactory = require('./explosion/explosion-factory');
const ExplosiveFactory = require('./explosive/explosive-factory');
const HudFactory = require('./hud/hud-factory');
const ShieldFactory = require('./shield/shield-factory');
const ShipFactory = require('./ship/ship-factory');
const ShipTrailFactory = require('./ship-trail/ship-trail-factory');

function EntityFactory(entities) {
  // Instantiate child factory objects
  this.background = new BackgroundFactory(this, entities);
  /*  this.bullet = new BulletFactory(entities);
  this.explosion = new ExplosionFactory(entities);
  this.explosive = new ExplosiveFactory(this, entities);
  this.hud = new HudFactory(entities);
  this.shield = new ShieldFactory(entities);
  this.ship = new ShipFactory(this, entities);
  this.shipTrail = new ShipTrailFactory(entities);*/
}

module.exports = EntityFactory;
