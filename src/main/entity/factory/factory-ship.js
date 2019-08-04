const entities = require('../entities');

function ShipFactory() {
  this.standardAsteroid = args => {
    const StandardAsteroidEntity = require('../types/ship/asteroid/asteroid');
    entities.push(new StandardAsteroidEntity({ ...args }));
    return entities[entities.length - 1];
  };

  this.condor = args => {
    const CondorEntity = require('../types/ship/condor/condor');
    entities.push(new CondorEntity({ ...args }));
    return entities[entities.length - 1];
  };

  this.albatross = args => {
    const AlbatrossEntity = require('../types/ship/albatross/albatross');
    entities.push(new AlbatrossEntity({ ...args }));
    return entities[entities.length - 1];
  };

  this.bowerbird = args => {
    const BowerbirdEntity = require('../types/ship/bowerbird/bowerbird');
    entities.push(new BowerbirdEntity({ ...args }));
    return entities[entities.length - 1];
  };

  this.gull = args => {
    const GullEntity = require('../types/ship/gull/gull');
    entities.push(new GullEntity({ ...args }));
    return entities[entities.length - 1];
  };

  this.heron = args => {
    const HeronEntity = require('../types/ship/heron/heron');
    entities.push(new HeronEntity({ ...args }));
    return entities[entities.length - 1];
  };

  this.player = args => {
    const PlayerEntity = require('../types/ship/player/player');
    entities.push(new PlayerEntity({ ...args }));
    return entities[entities.length - 1];
  };

  this.swallow = args => {
    const SwallowEntity = require('../types/ship/swallow/swallow');
    entities.push(new SwallowEntity({ ...args }));
    return entities[entities.length - 1];
  };

  this.warbler = args => {
    const WarblerEntity = require('../types/ship/warbler/warbler');
    entities.push(new WarblerEntity({ ...args }));
    return entities[entities.length - 1];
  };
}

module.exports = new ShipFactory();
