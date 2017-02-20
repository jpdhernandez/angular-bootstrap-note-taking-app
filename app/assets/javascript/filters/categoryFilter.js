angular.module("NoteTaker").filter("categoryFilter", function(_) {
  return function(categories, category) {
    if (category && category.id) {
      const filteredCategories = _.filter(categories, function(element) {
        return element.categoryId === category.id;
      });

      return filteredCategories;
    } else {
      return categories;
    }
  };
});