const Shield = require('../shield');

function StandardShield({ creator, list }) {
  Shield.call(this, {
    creator,
    list
  });

  /** @override **/
  this.type = [...this.type, 'standard'];
}

StandardShield.prototype = Object.create(Shield.prototype);

module.exports = StandardShield;
