Djello.controller('BoardMenuCtrl', ['$scope', '$state',
  function($scope, $state) {
    $scope.deleteBoard = function() {
      $scope.board.destroy()
        .then($state.go('main'))
    }
  }]);