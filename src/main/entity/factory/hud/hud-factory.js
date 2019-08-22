const BombHud = require('../../category/hud/bomb/bomb-hud');
const HealthHud = require('../../category/hud/health/health-hud');
const LifeHud = require('../../category/hud/life/life-hud');
const ScoreHud = require('../../category/hud/score/score-hud');
const ShieldHud = require('../../category/hud/shield/shield-hud');

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
