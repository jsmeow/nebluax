const { res, scale } = require('./options');

// Define the canvas reference and canvas context
const canvas = document.getElementById('canvas');

// Get the width, height of the window size
const width = res.width * scale;
const height = res.height * scale;

// Set the canvas dimensions to the window size
canvas.width = width;
canvas.height = height;

// Define the offscreen canvas reference that mirrors the main canvas
// This is done to optimize image rendering and performance
const offscreenCanvas = canvas.transferControlToOffscreen();

// Set the offscreen canvas dimensions to the window size
offscreenCanvas.width = width;
offscreenCanvas.height = height;

// Define the offscreen canvas canvas context
const ctx = offscreenCanvas.getContext('2d');

module.exports = {
  width,
  height,
  ctx
};
