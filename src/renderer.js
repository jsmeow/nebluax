const run = require('./main/main');

/*
 * This file is required by the index.html file and will
 * be executed in the renderer process for that window.
 * All of the Node.js APIs are available in this process.
 */

window && (window.ELECTRON_DISABLE_SECURITY_WARNINGS = true);
window && (window.ELECTRON_ENABLE_SECURITY_WARNINGS = false);

// Application renderer
// Run the application only after the application font is loaded.
document.fonts.load(`15px "Press Start 2P"`).then(function() {
  run();
});
