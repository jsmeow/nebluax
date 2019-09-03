const updateBackgroundCoverEntityPosition = require('./position/update-cover-entity-position');
const updateBackgroundPropEntityPosition = require('./position/update-prop-entity-position');

module.exports = {
  position: {
    cover: updateBackgroundCoverEntityPosition,
    prop: updateBackgroundPropEntityPosition
  }
};
