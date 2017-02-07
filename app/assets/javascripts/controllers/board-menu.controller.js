Djello.controller('BoardMenuCtrl', ['$scope', '$state', '$uibModal',
  function($scope, $state, $uibModal) {
    $scope.destroy = function() {
      $scope.board.destroy()
        .then($state.go('main'))
    }

   $scope.confirmDestroy = function() {
      $uibModal.open({
        template: "<confirm-delete></confirm-delete>",
        scope: $scope
      })
    }
  }]);