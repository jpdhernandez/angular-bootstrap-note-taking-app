angular.module("NoteTaker").controller("NotesCreateController", function($scope, Note, $location) {
  $scope.note = new Note();
  $scope.isSubmitting = false;

  $scope.saveNote = function(note) {
    $scope.isSubmitting = true;

    note.$save()
      .then(function() {
        $location.path("/");
      })
      .finally(function() {
        $scope.isSubmitting = false;
        $location.path("/");
      });
  }
});