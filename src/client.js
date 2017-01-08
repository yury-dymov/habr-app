if (process.env.NODE_ENV === 'production') {
  module.exports = require('./client.prod');
} else {
  module.exports = require('./client.dev');
}
