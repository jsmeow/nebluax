const BombHud = require('../../type/display/hud/bomb/bomb-hud');
const HealthHud = require('../../type/display/hud/health/health-hud');
const LifeHud = require('../../type/display/hud/life/life-hud');
const ScoreHud = require('../../type/display/hud/score/score-hud');
const ShieldHud = require('../../type/display/hud/shield/shield-hud');

function HudFactory(entities) {
  this.bombHud = function() {
    return new BombHud(entities);
  };

  this.healthHud = function() {
    return new HealthHud(entities);
  };

  this.lifeHud = function() {
    return new LifeHud(entities);
  };

  this.scoreHud = function() {
    return new ScoreHud(entities);
  };

  this.shieldHud = function() {
    return new ShieldHud(entities);
  };
}

module.exports = HudFactory;
