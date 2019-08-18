const BackgroundFactory = require('./background/background-factory');
const BulletFactory = require('./bullet/bullet-factory');
const ExplosionFactory = require('./explosion/explosion-factory');
const ExplosiveFactory = require('./explosive/explosive-factory');
const HudFactory = require('./hud/hud-factory');
const ShipFactory = require('./ship/ship-factory');
const ShipTrailFactory = require('./ship-trail/ship-trail-factory');

function EntityFactory(list) {
  this.background = new BackgroundFactory(this);
  this.bullet = new BulletFactory(list);
  this.explosion = new ExplosionFactory(list);
  this.explosive = new ExplosiveFactory(this, list);
  this.hud = new HudFactory(list);
  this.ship = new ShipFactory(this, list);
  this.shipTrail = new ShipTrailFactory(list);
}

module.exports = EntityFactory;
