angular.module("NoteTaker").controller("UserIndexController", function(User, $scope) {
  $scope.users = User.query();
});