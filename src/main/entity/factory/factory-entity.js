const factoryBackground = require('./background/background-factory');
const factoryExplosion = require('./factory-explosion');
const factoryProjectile = require('./factory-projectile');
const factoryShip = require('./factory-ship');

module.exports = {
  background: factoryBackground,
  explosion: factoryExplosion,
  projectile: factoryProjectile,
  ship: factoryShip
};
