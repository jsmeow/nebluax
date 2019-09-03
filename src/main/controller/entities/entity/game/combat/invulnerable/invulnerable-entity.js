const CombatEntity = require('../combat-entity');

function InvulnerableEntity(args) {
  CombatEntity.call(
    this,
    Object.assign(args, {
      invincible: InvulnerableEntity.INVINCIBLE
    })
  );
}

InvulnerableEntity.prototype = Object.create(CombatEntity.prototype);

InvulnerableEntity.PATH = `${CombatEntity.PATH}/invulnerable`;
InvulnerableEntity.INVINCIBLE = true;

module.exports = InvulnerableEntity;
