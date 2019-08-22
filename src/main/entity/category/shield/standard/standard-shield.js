const Shield = require('../shield');

function StandardShield({ creator, entities }) {
  Shield.call(this, {
    creator,
    entities
  });

  /** @override **/
  this.props.type = [...this.props.type, 'standard'];
}

StandardShield.prototype = Object.create(Shield.prototype);

module.exports = StandardShield;
