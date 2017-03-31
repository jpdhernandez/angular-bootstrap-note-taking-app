const _ = require('lodash');
const User = require('../models/user');

module.exports = function(app) {
  app.get('/users', function(req, res) {
    res.json(User.all());
  });

  app.get('/users/:id', function(req, res) {
    const userId = parseInt(req.params.id, 10);

    res.json(User.get(userId) || {});
  });
};