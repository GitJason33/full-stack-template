const path = require('path');

module.exports = {
  mode: "production",
  entry: "./server.js",
  target: "node",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.bundle.js",
  },

  stats: {
    errors: true,
    warnings: false
  },
}