Djello.controller('ListShowCtrl', ['$scope', 'listService', '$timeout', '$uibModal',
  function($scope, listService, $timeout, $uibModal) {

    var _resetEditing = function() {
      $scope.editing = {
        title: false
      }
    }

    var _focus = function(id) {
      $timeout(function() {
        document.getElementById(id).focus()
      })
    }

    $scope.edit = function(attribute) {
      if ($scope.userAuthorized) {
        $scope.editing[attribute] = true;
        _focus('edit-list-' + attribute + '-' + $scope.list.id);
      }
    }

    $scope.updateList = function() {
      _resetEditing();
      listService.update($scope.list)
    }

    $scope.confirmDestroy = function() {
      $uibModal.open({
        template: "<confirm-delete></confirm-delete>",
        scope: $scope
      })
    }

    $scope.destroy = function() {
      listService.destroy($scope.list);
    }

    $scope.$on('dropCard', function(e, data) {
      var card = data.card;
      var originalListId = data.originalListId;
      if ($scope.list.id === originalListId) {
        for (var i = 0; i < $scope.list.cards.length; i++) {
          var original_card = $scope.list.cards[i];
          if (original_card.id === card.id) {
            $scope.list.cards.splice(i, 1);
            break;
          }
        }
      }
      if (card.list.id === $scope.list.id) { 
        angular.copy(card.list.cards, $scope.list.cards)
      }
    })

    $scope.$on('destroyCard', function(e, card) {
      if (card.list_id !== $scope.list.id) { return; }
      var cards = $scope.list.cards;
      console.log(cards)
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].id === card.id) {
          cards.splice(i, 1);
          break;
        }
      }
    })

    $scope.userAuthorized = $scope.currentUser.id === $scope.list.user_id || 
                            $scope.currentUser.id === $scope.board.user_id;

    _resetEditing();
  }]);