const Shield = require('../shield');

function StandardShield({ parent, entities }) {
  Shield.call(this, {
    parent,
    entities
  });

  /** @override **/
  this.props.type = [...this.props.type, 'standard'];
}

StandardShield.prototype = Object.create(Shield.prototype);

module.exports = StandardShield;
