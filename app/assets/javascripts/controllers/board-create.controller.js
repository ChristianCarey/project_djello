Djello.controller('BoardCreateCtrl', ['$scope', 'boardService', '$state',
  function($scope, boardService, $state) {
    $scope.createBoard = function(){
      boardService.create($scope.newBoard)
        .then(function(board) {
          $scope.newBoard = {};
          $scope.createBoardForm.$setPristine;
          $state.go('showBoard', { id: board.id })
        })
    }
  }]);