const updateBaseEntityPosition = require('./position/update-base-entity-position');
const updateBaseEntityTimers = require('./timers/update-base-entity-timers');

module.exports = {
  position: updateBaseEntityPosition,
  timers: updateBaseEntityTimers
};
