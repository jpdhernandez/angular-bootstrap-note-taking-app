angular.module("NoteTaker").directive("ntCategorySelector", function(Category) {
  return {
    replace: "true",
    restrict: "E",
    templateUrl: "/assets/templates/directives/ntCategorySelector.html",
    link: function(scope, element, attrs) {
      var activeCategory = false;
      scope.categories = Category.query();

      scope.isActive = function(category) {
        return activeCategory.id === category.id;
      };

      scope.toggleSelector = function(category) {

      };
    }
  };
});