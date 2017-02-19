angular.module("NoteTaker").controller("NotesIndexController", function(Note, $scope) {
  $scope.notes = Note.query();
});