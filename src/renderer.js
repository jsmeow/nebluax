/*
 * This file is required by the index.html file and will
 * be executed in the renderer process for that window.
 * All of the Node.js APIs are available in this process.
 */

const main = require('./main/main');

// Application renderer.
function render() {
  // Run the application only after the application font is loaded.
  document.fonts.load(`15px "Press Start 2P"`).then(function() {
    main.run();
  });
}

module.exports.render = render;
