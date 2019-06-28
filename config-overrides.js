const path = require('path')
function resolve(url) {
    return path.join(__dirname, './', url)
  }
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config.resolve.alias={
        '@': resolve('src')
    }
    return config;
  };