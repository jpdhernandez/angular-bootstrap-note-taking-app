angular.module("NoteTaker").directive("ntCategorySelector", function(Category) {
  return {
    replace: true,
    restrict: "E",
    // require another directive that's related to our directive
    // '?' makes it optional, this brings in ngModel as the fourth arg to our link
    require: "?ngModel",
    templateUrl: "/assets/templates/directives/ntCategorySelector.html",
    link: function(scope, element, attrs, ngModelCtrl){
      let activeCategory = {};
      scope.categories = Category.query();

      scope.isActive = function (category) {
        return activeCategory && activeCategory.id === category.id;
      };

      scope.toggleCategory = function(category) {
        if (category === activeCategory) {
          activeCategory = {};
        } else {
          activeCategory = category;
        }

        ngModelCtrl.$setViewValue(activeCategory);
      }

      ngModelCtrl.$render = function() {
        activeCategory = ngModelCtrl.$viewValue;
      }
    }
  };
});