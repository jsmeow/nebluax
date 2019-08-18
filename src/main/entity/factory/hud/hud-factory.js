const BombHud = require('../../category/hud/bomb/bomb-hud');
const HealthHud = require('../../category/hud/health/health-hud');
const LifeHud = require('../../category/hud/life/life-hud');
const ScoreHud = require('../../category/hud/score/score-hud');
const ShieldHud = require('../../category/hud/shield/shield-hud');

function HudFactory(list) {
  this.bombHud = function() {
    return new BombHud(list);
  };

  this.healthHud = function() {
    return new HealthHud(list);
  };

  this.lifeHud = function() {
    return new LifeHud(list);
  };

  this.scoreHud = function() {
    return new ScoreHud(list);
  };

  this.shieldHud = function() {
    return new ShieldHud(list);
  };
}

module.exports = HudFactory;
