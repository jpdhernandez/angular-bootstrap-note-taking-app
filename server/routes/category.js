const Category = require('../models/category');

module.exports = function(app) {
  // Return a list of available node types
  app.get('/categories', function(req, res) {
    res.json(Category.all());
  });

  app.get('/categories/:id', function(req, res) {
    const categoryId = parseInt(req.params.id, 10);
    res.json(Category.get(categoryId) || {});
  });
};