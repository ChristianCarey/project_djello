
Djello.controller('BoardShowCtrl', ['$scope', '$stateParams', '$state', 'board', 'boardService',
  function($scope, $stateParams, $state, board, boardService) {
    
    var _setBoard = function(board) {
     $scope.board = board;
    }

    $scope.changeBoard = function(){
      $state.go("boards", {id: $scope.boardId}, {reload: true})
    }

    $scope.deleteBoard = function() {
      board.destroy()
        .then($state.go('main'))
    }

    $scope.$on('createList', function(e, list) {
      $scope.board.lists.push(list);
    })

    _setBoard(board);
  }])