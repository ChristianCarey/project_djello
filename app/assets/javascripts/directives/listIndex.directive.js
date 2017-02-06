Djello.directive('listIndex', function() {
  return {
    templateUrl: '/directives/lists/index',
    restrict: 'E',
    scope: {
      board: '='
    }
  }
})