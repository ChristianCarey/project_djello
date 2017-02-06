Djello.controller('ListShowCtrl', ['$scope', 'listService', '$timeout',
  function($scope, listService, $timeout) {
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
      $scope.editing[attribute] = true;
      _focus('edit-list-' + attribute);
    }

    $scope.updateList = function() {
      _resetEditing();
      listService.update($scope.list)
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
        console.log($scope.list.cards)
        angular.copy(card.list.cards, $scope.list.cards)
        console.log($scope.list.cards)
      }
    })

    _resetEditing();
  }]);