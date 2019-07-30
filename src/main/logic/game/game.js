const life = require('./hud/life/life-hud');
const shield = require('./hud/shield/shield-hud');
const health = require('./hud/health/health-hud');
const bomb = require('./hud/bomb/bomb-hud');
const score = require('./hud/score/score-hud');
const Level1 = require('../../level/1/level1');

// The current level.
let level;

function update(player, entities) {
  // Create a new level.
  if (!level) {
    level = new Level1(player, entities);
  }

  // Iterate through the entities list.
  entities.forEach((entity, idx) => {
    entity.update(entities, idx);
  });
}

function render(player, entities) {
  // Render the heads-up display.
  life.render(player);
  shield.render(player);
  health.render(player);
  bomb.render(player);
  score.render(player);

  // Iterate through the entities list.
  entities.forEach(entity => {
    entity.render();
  });
}

module.exports = {
  update,
  render
};
