function getFactionColor(entity) {
  if (entity.faction === 'enemy') {
    return '#cb4b16';
  }

  if (entity.faction === 'allied') {
    return '#2aa198';
  }

  return '#ffffff';
}

function divider() {
  console.log(
    '%c------------------------------------------------------',
    'color:#b58900;'
  );
}

function attack(entity, challenger) {
  console.log(
    `🗡️️ %c${entity.faction} ${entity.type}%c attacked %c${challenger.faction} ` +
      `${challenger.type}%c for : %c${entity.points.attack} health`,
    `color:${getFactionColor(entity)};`,
    'color:#ffffff',
    `color:${getFactionColor(challenger)};`,
    'color:#ffffff',
    `color:${getFactionColor(entity)};`
  );
}

function health(entity) {
  console.log(
    `💗 %c${entity.faction} ${entity.type}%c has %c${entity.points.health} ` +
      `health%c left`,
    `color:${getFactionColor(entity)};`,
    'color:#ffffff',
    `color:${getFactionColor(entity)};`,
    'color:#ffffff'
  );
}

function exchange(entity, challenger) {
  if (challenger.type !== ('bullet' || 'bomb')) {
    attack(entity, challenger);
    health(challenger);
    divider();
  }
}

function death(entity) {
  console.log(
    `💀 %c${entity.faction} ${entity.type} has been killed 💀`,
    'color:#859900;'
  );
  divider();
}

module.exports = {
  divider,
  attack,
  health,
  exchange,
  death
};
