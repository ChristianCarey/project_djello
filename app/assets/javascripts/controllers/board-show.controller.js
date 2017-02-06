
Djello.controller('BoardShowCtrl', ['$scope', '$stateParams', '$state', 'board', 'boardService', '$timeout',
  function($scope, $stateParams, $state, board, boardService, $timeout) {
  
     $scope.board = board;

    var _resetEditing = function() {
      $scope.editing = {
        title: false,
        description: false
      }
    }

    var _focus = function(id) {
      $timeout(function() {
        document.getElementById(id).focus()
      })
    }

    $scope.changeBoard = function(){
      $state.go("boards", {id: $scope.boardId}, {reload: true})
    }

    $scope.deleteBoard = function() {
      board.destroy()
        .then($state.go('main'))
    }

    $scope.edit = function(attribute) {
      $scope.editing[attribute] = true;
      _focus('edit-board-' + attribute);
    }

    $scope.updateBoard = function() {
      _resetEditing();
      boardService.update($scope.board)
    }

    $scope.$on('createList', function(e, list) {
      $scope.board.lists.push(list);
    })

    _resetEditing();
  }])