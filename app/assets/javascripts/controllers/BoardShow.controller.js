
Jello.controller('BoardShowCtrl', ['$scope', '$stateParams', '$state', 'boards', "board",
  function($scope, $stateParams, $state, boards, board) {
    $scope.boards = boards
    $scope.currentBoard = board
    $scope.boardId = board.id

    $scope.changeBoard = function(){
      $state.go("boards", {id: $scope.boardId}, {reload: true})
    }

    $scope.deleteBoard = function() {
      board.destroy()
        .then($state.go('boards'))
    }
  }])