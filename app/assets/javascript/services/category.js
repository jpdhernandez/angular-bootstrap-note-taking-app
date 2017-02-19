angular.module("NoteTaker").factory("Category", function($resource) {
  return $resource("/categories/:id");
});