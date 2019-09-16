const Explosive = require('../explosive');

function Bomb(args) {
  Explosive.call(
    this,
    Object.assign(args, {
      width: Bomb.WIDTH,
      height: Bomb.HEIGHT
    })
  );
}

Bomb.prototype = Object.create(Explosive.prototype);

Bomb.PATH = `${Explosive.PATH}/bomb`;
Bomb.WIDTH = 7;
Bomb.HEIGHT = 7;

module.exports = Bomb;
