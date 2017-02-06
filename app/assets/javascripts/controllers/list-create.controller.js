Djello.controller('ListCreateCtrl', ['$scope',
  function($scope) {

    var _clearForm = function() {
      $scope.newList = {};
      $scope.newListForm.$setPristine();
    }

    $scope.createList = function() {
      $scope.board.createList({
        board_id: $scope.board.id,
        title: $scope.newList.title
      })
      .then(_clearForm)
    }
  }]);