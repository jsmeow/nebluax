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
    `🗡️️ %c${entity.faction} ${entity.props.type}%c attacked %c${challenger.faction} ` +
      `${challenger.props.type}%c for : %c${entity.points.attack} health`,
    `color:${getFactionColor(entity)};`,
    'color:#ffffff',
    `color:${getFactionColor(challenger)};`,
    'color:#ffffff',
    `color:${getFactionColor(entity)};`
  );
}

function health(entity) {
  console.log(
    `💗 %c${entity.faction} ${entity.props.type}%c has %c${entity.points.health} ` +
      `health%c left`,
    `color:${getFactionColor(entity)};`,
    'color:#ffffff',
    `color:${getFactionColor(entity)};`,
    'color:#ffffff'
  );
}

function exchange(entity, challenger) {
  if (challenger.props.type !== 'projectile') {
    attack(entity, challenger);
    health(challenger);
    divider();
  }
}

function death(entity) {
  if (entity.props.type !== 'projectile') {
    console.log(
      `💀 %c${entity.faction} ${entity.props.type} has been killed`,
      'color:#859900;'
    );
    console.log(
      `💯 %c${entity.faction} ${entity.props.type} yielded ${entity.points.score} score points`,
      'color:#859900;'
    );

    divider();
  }
}

module.exports = {
  divider,
  attack,
  health,
  exchange,
  death
};
