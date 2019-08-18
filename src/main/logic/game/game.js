const { factory, list } = require('../../entities');

// The application/game life hud
const lifeHud = factory.hud.lifeHud();

// The application/game shield hud
const shieldHud = factory.hud.shieldHud();

// The application/game health hud
const healthHud = factory.hud.healthHud();

// The application/game bomb hud
const bombHud = factory.hud.bombHud();

// The application/game score hud
const scoreHud = factory.hud.scoreHud();

// The current level
let level;

function update() {
  // Create a new level
  if (!level) {
    // Level = new Level1();
  }

  // Iterate through the entities list
  list.forEach((entity, index) => {
    entity.update(index);
  });
}

function render() {
  lifeHud.render();
  shieldHud.render();
  healthHud.render();
  bombHud.render();
  scoreHud.render();

  // Iterate through the entities list
  list.forEach(entity => {
    entity.render();
  });
}

module.exports = {
  update,
  render
};
