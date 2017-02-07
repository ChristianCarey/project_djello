
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

    $scope.$on('destroyList', function(e, list) {
      for (var i = 0; i < $scope.board.lists.length; i++) {
        var other_list = $scope.board.lists[i];
        if (other_list.id === list.id) {
          $scope.board.lists.splice(i, 1);
          break
        }
      }
    })

    _resetEditing();
  }])